const desktop = { width:1280, height:665 };
const introRoutes = ['/intro/', '/about/', '/education/', '/experience/'];

// Read fresh authored markup so mobile node relocation and tablet transforms
// never enter the print document. No site scripts run in this isolated frame.
export async function savePortfolioPdf({ intro = false } = {}) {
  const routes = intro ? introRoutes : [location.pathname + location.search];
  const sources = await Promise.all(routes.map(async route => {
    const response = await fetch(route);
    if (!response.ok) throw new Error(`Portfolio request failed: ${response.status}`);
    const page = new DOMParser().parseFromString(await response.text(), 'text/html');
    page.querySelectorAll('script, link[rel="modulepreload"]').forEach(node => node.remove());
    return page;
  }));
  const source = sources[0];
  const introCanvases = intro ? sources.map((page, index) => {
    const canvas = page.querySelector('.intro-root');
    if (!canvas?.querySelector('main.intro-main')) {
      throw new Error(`Intro presentation not found: ${introRoutes[index]}`);
    }
    return canvas;
  }) : [];
  if (intro) {
    source.title = 'Manoj Pant - Introduction';
    // Route bundles may differ. Load their original styles into the same frame
    // before freezing desktop media, without reconstructing any page bodies.
    const knownStyles = new Set([...source.head.querySelectorAll('link[rel="stylesheet"], style')]
      .map(node => node.tagName === 'LINK' ? node.getAttribute('href') : node.textContent));
    sources.slice(1).forEach(page => {
      page.head.querySelectorAll('link[rel="stylesheet"], style').forEach(node => {
        const key = node.tagName === 'LINK' ? node.getAttribute('href') : node.textContent;
        if (!knownStyles.has(key)) {
          knownStyles.add(key);
          source.head.append(node.cloneNode(true));
        }
      });
    });
  }
  const base = source.createElement('base');
  base.href = intro ? new URL(introRoutes[0], location.href).href : location.href;
  source.head.prepend(base);

  const frame = document.createElement('iframe');
  frame.title = intro ? 'Printable introduction' : 'Printable portfolio';
  frame.setAttribute('aria-hidden', 'true');
  frame.tabIndex = -1;
  frame.style.cssText = 'position:fixed;left:-10000px;top:0;width:1280px;height:665px;border:0;pointer-events:none;';
  document.body.append(frame);
  try {
    const doc = frame.contentDocument;
    const view = frame.contentWindow;
    const ready = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Print resources timed out.')), 30000);
      frame.onload = () => { clearTimeout(timeout); resolve(); };
      frame.onerror = () => { clearTimeout(timeout); reject(new Error('Print document failed to load.')); };
    });
    doc.open();
    doc.write('<!doctype html>' + source.documentElement.outerHTML);
    doc.close();
    await ready;
    await doc.fonts.ready;
    await Promise.all([...doc.images].map(image => image.decode().catch(() => {})));

    const canvas = doc.querySelector('.portfolio-root, .project-shell');
    if (!canvas) throw new Error('Presentation canvas not found.');
    const sections = intro ? introCanvases : [...canvas.querySelectorAll('header nav a')]
      .map(link => doc.getElementById(link.hash.slice(1)))
      .filter(section => section?.matches('main section'));
    const expectedPages = intro ? 4 : 10;
    if (sections.length !== expectedPages || new Set(sections).size !== expectedPages) {
      throw new Error(`Expected ${expectedPages} presentation sections; found ${sections.length}.`);
    }
    const width = doc.documentElement.clientWidth;
    const sheets = [...doc.styleSheets];
    // Preserve source declarations, including variable-based border shorthands.
    const copies = await Promise.all(sheets.map(async sheet => {
      let css = sheet.ownerNode.textContent;
      if (sheet.href) {
        const stylesheet = await fetch(sheet.href);
        if (!stylesheet.ok) throw new Error(`Print stylesheet failed: ${sheet.href}`);
        css = await stylesheet.text();
      }
      const style = doc.createElement('style');
      style.media = 'print';
      style.textContent = css.replace(/(-?[\d.]+)(?:d|s|l)?v(w|h|min|max)\b/gi, (_, value, unit) => {
        const axis = unit.toLowerCase();
        return `${+value * (axis === 'w' || axis === 'max' ? desktop.width : desktop.height) / 100}px`;
      });
      return style;
    }));
    const freezeDesktopMedia = rules => {
      for (const rule of rules) {
        if (rule.type === 4 && !/\bprint\b/i.test(rule.conditionText)) {
          rule.media.mediaText = view.matchMedia(rule.conditionText).matches ? 'all' : 'not all';
        }
        if (rule.cssRules) freezeDesktopMedia(rule.cssRules);
      }
    };
    copies.forEach(style => { doc.head.append(style); freezeDesktopMedia(style.sheet.cssRules); });

    const pages = doc.createDocumentFragment();
    sections.forEach(section => {
      const page = doc.createElement('div');
      page.className = 'pdf-page';
      const copy = (intro ? section : canvas).cloneNode(true);
      copy.style.width = `${intro ? desktop.width : width}px`;
      if (!intro) {
        const main = copy.querySelector('main');
        // Preserve shared SVG definitions, while selecting one authored section.
        [...main.children].forEach(child => {
          if (child.tagName === 'SECTION') child.remove();
          else if (!child.matches('svg')) child.remove();
        });
        main.append(section.cloneNode(true));
      }
      copy.querySelectorAll('[data-save-pdf], script, dialog, .ics-modal-backdrop, .project-site-footer').forEach(node => node.remove());
      page.append(copy);
      pages.append(page);
    });
    doc.body.replaceChildren(pages);
    doc.body.classList.add('pdf-document');
    sheets.forEach(sheet => { sheet.disabled = true; });
    if (intro) {
      const style = doc.createElement('style');
      style.media = 'print';
      // Only this transient intro print document retains the designed header.
      // The shared portfolio/project print stylesheet remains unchanged.
      style.textContent = `
        .pdf-document .pdf-page > .intro-root { width:1280px !important; height:665px !important; }
        .pdf-document .intro-root .intro-main { height:calc(665px - var(--intro-header-h)) !important; }
        .pdf-document .intro-root .intro-header :is(nav,.header-cta) { visibility:visible !important; }
        .pdf-document .intro-root [data-save-intro-pdf] { visibility:hidden !important; }
      `;
      doc.head.append(style);
      // These include logos/images from the other three authored routes.
      await doc.fonts.ready;
      await Promise.all([...doc.images].map(image => image.decode().catch(() => {})));
    }

    await new Promise(resolve => {
      view.addEventListener('afterprint', resolve, { once:true });
      view.focus();
      view.print();
    });
  } finally {
    frame.remove();
  }
}
