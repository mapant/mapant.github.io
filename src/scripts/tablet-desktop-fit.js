// Tablet uses the existing 1280 x 665 desktop cascade and one proportional fit.
// Original stylesheets remain authoritative and are restored outside this range.
const tablet = matchMedia('(min-width: 768px) and (max-width: 1279px)');
const canvas = document.querySelector('.portfolio-root, .project-shell');
const desktop = { width: 1280, height: 665 };

if (canvas) {
  const fitted = document.createElement('style');
  fitted.dataset.tabletDesktopFit = '';
  const frame = document.createElement('div');
  frame.dataset.tabletDesktopFrame = '';
  const basis = document.createElement('div');
  basis.dataset.tabletDesktopBasis = '';
  frame.append(basis);
  let originals = [];
  let mirrors = [];
  let preparing = false;
  let disposed = false;
  let sectionFrames = [];

  const compare = (actual, operator, value) => {
    if (operator === '<=') return actual <= value;
    if (operator === '>=') return actual >= value;
    if (operator === '<') return actual < value;
    if (operator === '>') return actual > value;
    return actual === value;
  };
  const desktopMedia = query => {
    const evaluated = query
      .replace(/\((min-|max-)?(width|height)\s*:\s*([\d.]+)px\)/gi,
        (_, limit, axis, value) => compare(desktop[axis.toLowerCase()], limit === 'min-' ? '>=' : limit === 'max-' ? '<=' : '=', +value) ? '(min-width: 0px)' : '(max-width: 0px)')
      .replace(/\((width|height)\s*(<=|>=|<|>|=)\s*([\d.]+)px\)/gi,
        (_, axis, operator, value) => compare(desktop[axis.toLowerCase()], operator, +value) ? '(min-width: 0px)' : '(max-width: 0px)');
    return matchMedia(evaluated).matches;
  };
  const viewportUnits = css => css.replace(/(-?[\d.]+)(?:d|s|l)?v(w|h|min|max)\b/gi, (_, value, axis) => {
    const length = axis === 'w' ? desktop.width : axis === 'h' ? desktop.height : axis === 'min' ? desktop.height : desktop.width;
    return `${+value * length / 100}px`;
  });
  const desktopRules = rules => {
    for (const rule of rules) {
      if (rule instanceof CSSMediaRule) rule.media.mediaText = desktopMedia(rule.conditionText) ? 'all' : 'not all';
      if (rule.cssRules) desktopRules(rule.cssRules);
    }
  };
  const mirrorSheet = async sheet => {
    // Keep authored declarations intact: CSSOM cssText serialization can lose
    // variable-based border shorthands when another declaration overrides a side.
    let source = sheet.ownerNode.textContent;
    if (sheet.href) {
      const response = await fetch(sheet.href);
      if (!response.ok) throw new Error(`Unable to read tablet stylesheet: ${sheet.href}`);
      source = await response.text();
    }
    const mirror = document.createElement('style');
    mirror.dataset.tabletDesktopStyles = '';
    mirror.textContent = viewportUnits(source);
    if (sheet.media.length) mirror.media = desktopMedia(sheet.media.mediaText) ? 'all' : 'not all';
    return mirror;
  };

  const frameSections = scale => {
    if (!sectionFrames.length) {
      // The existing navigation defines the page boundaries on every route.
      // Measure all canvases before inserting wrappers or changing selectors.
      sectionFrames = [...new Set([...canvas.querySelectorAll('header nav a')]
        .map(link => document.getElementById(link.hash.slice(1))))]
        .filter(section => section?.matches('main section') && canvas.contains(section))
        .map(section => {
          const surface = getComputedStyle(section);
          const pattern = getComputedStyle(section, '::before');
          const page = document.createElement('div');
          page.dataset.tabletSectionFrame = '';
          page.style.background = surface.background;
          page.style.setProperty('--tablet-section-pattern', pattern.display === 'none' ? 'none' : pattern.background);
          page.style.setProperty('--tablet-section-pattern-opacity', pattern.opacity);
          page.style.boxShadow = `inset 0 -${surface.borderBottomWidth} ${surface.borderBottomColor}`;
          return { section, page, style: section.getAttribute('style'), height: section.getBoundingClientRect().height / scale };
        });
      const preserveChildSelectors = rules => {
        for (const rule of rules) {
          // Keep owning main > section rules effective through the new frame.
          if (rule instanceof CSSStyleRule && /(?<![\w-])main\s*>/.test(rule.selectorText)) {
            rule.selectorText = rule.selectorText.replace(/(?<![\w-])main\s*>\s*/g, 'main > :where([data-tablet-section-frame]) > ');
          }
          if (rule.cssRules) preserveChildSelectors(rule.cssRules);
        }
      };
      mirrors.forEach(mirror => preserveChildSelectors(mirror.sheet.cssRules));
      sectionFrames.forEach(({ section, page, height }) => {
        section.before(page);
        page.append(section);
        section.dataset.tabletSectionCanvas = '';
        section.style.height = `${height}px`;
        section.style.background = 'transparent';
        section.style.borderColor = 'transparent';
      });
    }
  };
  const alignSection = hash => {
    if (!tablet.matches) return false;
    const target = sectionFrames.find(({ section }) => `#${section.id}` === hash);
    if (!target) return false;
    const headerHeight = canvas.querySelector('header').getBoundingClientRect().height;
    window.scrollTo({ top: scrollY + target.page.getBoundingClientRect().top - headerHeight, behavior: getComputedStyle(document.documentElement).scrollBehavior });
    return true;
  };
  const anchorClick = event => {
    if (!tablet.matches || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download')) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
    if (alignSection(url.hash)) {
      event.preventDefault();
      if (location.hash !== url.hash) history.pushState(null, '', url.hash);
    }
  };
  const hashChange = () => alignSection(location.hash);

  const restore = () => {
    observer.disconnect();
    sectionFrames.forEach(({ section, page, style }) => {
      page.replaceWith(section);
      delete section.dataset.tabletSectionCanvas;
      if (style === null) section.removeAttribute('style');
      else section.setAttribute('style', style);
    });
    sectionFrames = [];
    originals.forEach(({ sheet, disabled }) => { sheet.disabled = disabled; });
    originals = [];
    mirrors.forEach(mirror => mirror.remove());
    mirrors = [];
    fitted.remove();
    if (frame.parentNode) frame.replaceWith(canvas);
    canvas.removeAttribute('data-tablet-desktop-canvas');
    delete canvas.dataset.tabletFitScale;
    canvas.style.removeProperty('--tablet-scroll-y');
  };
  const scroll = () => {
    if (tablet.matches) canvas.style.setProperty('--tablet-scroll-y', `${scrollY}px`);
  };
  const sizeFrame = () => {
    if (tablet.matches && frame.parentNode) frame.style.height = `${canvas.offsetHeight * +canvas.dataset.tabletFitScale}px`;
  };
  const fit = async () => {
    if (!tablet.matches) { restore(); return; }
    if (!originals.length) {
      if (preparing || disposed) return;
      preparing = true;
      try {
        const sheets = [...document.styleSheets].map(sheet => ({ sheet, disabled: sheet.disabled }));
        const copies = await Promise.all(sheets.filter(({ disabled }) => !disabled).map(({ sheet }) => mirrorSheet(sheet)));
        if (!tablet.matches || disposed) return;
        originals = sheets;
        mirrors = copies;
        mirrors.forEach(mirror => {
          document.head.append(mirror);
          desktopRules(mirror.sheet.cssRules);
        });
      } catch (error) {
        restore();
        console.error('Tablet desktop fitting could not load its stylesheets.', error);
        return;
      } finally {
        preparing = false;
      }
      originals.forEach(({ sheet }) => { sheet.disabled = true; });
      canvas.setAttribute('data-tablet-desktop-canvas', '');
      canvas.before(frame);
      basis.append(canvas);
      document.head.append(fitted);
    }
    // Match the desktop's available width, including the native scrollbar gutter.
    const scrollbar = innerWidth - document.documentElement.clientWidth;
    const width = desktop.width - scrollbar;
    const scale = document.documentElement.clientWidth / width;
    canvas.dataset.tabletFitScale = String(scale);
    fitted.textContent = `@media (min-width:768px) and (max-width:1279px) {
      [data-tablet-desktop-frame] { position:relative; width:100%; overflow:clip; }
      [data-tablet-desktop-basis] { position:absolute; top:0; left:0; width:1280px; height:665px; container-type:size; }
      [data-tablet-desktop-canvas] { position:absolute; top:0; left:0; width:${width}px; max-width:none; transform:scale(${scale}); transform-origin:top left; }
      [data-tablet-desktop-canvas] > header { translate:0 calc(var(--tablet-scroll-y, 0px) * ${1 / scale - 1}); }
      [data-tablet-desktop-canvas] .ics-modal-backdrop { top:calc(var(--tablet-scroll-y, 0px) / ${scale} + var(--header-h)); bottom:auto; height:calc(${innerHeight / scale}px - var(--header-h) - 0.9375cqw); }
      [data-tablet-desktop-canvas] .ics-modal { height:calc(665px - var(--header-h) - 1.71875cqw); max-height:calc(665px - var(--header-h) - 1.71875cqw); align-self:flex-start; }
      .asi-workspace-dialog { transform:scale(${scale}); transform-origin:center; }
      [data-tablet-section-frame] { position:relative; isolation:isolate; display:flex; flex-direction:column; justify-content:flex-start; min-height:0; }
      [data-tablet-section-frame]::before { content:""; position:absolute; inset:0; z-index:-1; pointer-events:none; background:var(--tablet-section-pattern); opacity:var(--tablet-section-pattern-opacity); }
      [data-tablet-section-frame] > [data-tablet-section-canvas] { flex:none; }
      [data-tablet-desktop-canvas] section[data-tablet-section-canvas]::before { background:none; }
    }`;
    scroll();
    const headerHeight = canvas.querySelector('header').getBoundingClientRect().height;
    const initialFrames = !sectionFrames.length;
    frameSections(scale);
    sizeFrame();
    observer.observe(canvas);
    fitted.sheet.insertRule(`@media (min-width:768px) and (max-width:1279px) {
      html { scroll-padding-top:${headerHeight}px; }
    }`, fitted.sheet.cssRules.length);
    if (initialFrames && location.hash) requestAnimationFrame(hashChange);
  };
  tablet.addEventListener('change', fit);
  window.addEventListener('resize', fit, { passive: true });
  window.addEventListener('scroll', scroll, { passive: true });
  document.addEventListener('click', anchorClick);
  window.addEventListener('hashchange', hashChange);
  const observer = new ResizeObserver(sizeFrame);
  if (document.readyState === 'complete') fit();
  else window.addEventListener('load', fit, { once: true });
  if (import.meta.hot) import.meta.hot.dispose(() => {
    disposed = true;
    tablet.removeEventListener('change', fit);
    window.removeEventListener('resize', fit);
    window.removeEventListener('load', fit);
    window.removeEventListener('scroll', scroll);
    document.removeEventListener('click', anchorClick);
    window.removeEventListener('hashchange', hashChange);
    observer.disconnect();
    restore();
  });
}
