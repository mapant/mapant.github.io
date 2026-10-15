// Keep the same diagram nodes and relationships when their layout becomes vertical.
// Connectors follow measured card edges; desktop SVGs retain their authored geometry.
const compact = matchMedia('(max-width: 767px)');
const svgNS = 'http://www.w3.org/2000/svg';
const phone = matchMedia('(max-width: 767px)');
document.querySelectorAll('.dc-scope-main').forEach(scope => {
  const track = scope.querySelector('.dc-phase-track');
  const cards = [...scope.querySelectorAll('.dc-phase-card')];
  if (!track) return;
  const steps = [...track.children];
  const arrange = () => steps.forEach((step, index) => {
    if (phone.matches) cards[index].prepend(step);
    else track.append(step);
  });
  phone.addEventListener('change', arrange);
  arrange();
});
const diagrams = [
  ['.ics-ecosystem-board', '.ics-ecosystem-hub', '.ics-eco-node'],
  ['.ics-strategy-diagram', '.ics-strategy-hub', '.ics-strategy-card'],
  ['.ics-leadership-map', '.ics-leadership-hub', '.ics-competency'],
  ['.dc-network-map', '.dc-network-hub', '.dc-network-node'],
  ['.dc-collaboration-map', '.dc-collab-center', ':scope > span'],
  ['.ecosystem-cards', '.eco-center', '.eco-card'],
  ['.eco-orbit', '.orbit-core', '.orbit-tag'],
  ['.wheel-ring', '.wheel-core', '.wheel-seg'],
];
document.querySelectorAll('.technology-model').forEach(model => {
  const grid = model.querySelector('.tech-capability-grid');
  const nodes = [...model.querySelectorAll('.tech-model-chain > article')];
  const lists = [...grid.querySelectorAll(':scope > ul')];
  const arrange = () => lists.forEach((list, index) => {
    if (compact.matches) nodes[index].append(list);
    else grid.append(list);
  });
  compact.addEventListener('change', arrange);
  arrange();
});
document.querySelectorAll('.asi-map-art').forEach(map => {
  const original = map.getAttribute('preserveAspectRatio');
  const fit = () => map.setAttribute('preserveAspectRatio', compact.matches ? 'xMidYMid meet' : original || 'xMidYMid meet');
  compact.addEventListener('change', fit);
  fit();
});
function connect(scene, edges, directed = false) {
  const svg = document.createElementNS(svgNS, 'svg');
  svg.classList.add('responsive-relationships');
  svg.setAttribute('aria-hidden', 'true');
  const redraw = () => {
    svg.replaceChildren();
    if (!compact.matches) return;
    const bounds = scene.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    edges.forEach(([from, to, color], index) => {
      if (!from || !to) return;
      const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
      const x1 = a.left - bounds.left, y1 = a.top + a.height / 2 - bounds.top;
      const x2 = b.left - bounds.left, y2 = b.top + b.height / 2 - bounds.top;
      const rail = 6 + (index % 4) * 5;
      const path = document.createElementNS(svgNS, 'path');
      if (scene.matches('.dc-collaboration-map, .dc-network-map, .ics-ecosystem-board, .ics-leadership-map') && !phone.matches) {
        const center = a.left + a.width / 2 - bounds.left;
        const target = b.left < a.left ? b.right - bounds.left : b.left - bounds.left;
        path.setAttribute('d', `M${center} ${a.bottom - bounds.top}V${y2}H${target}`);
      } else {
        path.setAttribute('d', `M${x1} ${y1}H${rail}V${y2}H${x2}`);
      }
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', color || '#087ff0');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-dasharray', '5 4');
      svg.append(path);
      if (directed) {
        const arrow = document.createElementNS(svgNS, 'path');
        arrow.setAttribute('d', `M${x2 - 7} ${y2 - 4}L${x2} ${y2}L${x2 - 7} ${y2 + 4}`);
        arrow.setAttribute('fill', 'none');
        arrow.setAttribute('stroke', color || '#087ff0');
        arrow.setAttribute('stroke-width', '2');
        svg.append(arrow);
      }
    });
  };
  scene.append(svg);
  const observer = new ResizeObserver(redraw);
  observer.observe(scene);
  edges.flatMap(([a, b]) => [a, b]).filter(Boolean).forEach(node => observer.observe(node));
  compact.addEventListener('change', redraw);
  redraw();
}
diagrams.forEach(([selector, hubSelector, nodeSelector]) => {
  document.querySelectorAll(selector).forEach(scene => {
    const hub = scene.querySelector(hubSelector);
    if (!hub) return;
    connect(scene, [...scene.querySelectorAll(nodeSelector)].map(node => [hub, node, getComputedStyle(node).getPropertyValue('--tone').trim() || getComputedStyle(node).getPropertyValue('--app-tone').trim()]));
  });
});
document.querySelectorAll('.nokia-ecosystem-map').forEach(scene => {
  const core = scene.querySelector('.analytics-core');
  const sources = [...scene.querySelectorAll('.source-column article')];
  const consumers = [...scene.querySelectorAll('.decision-column article')];
  connect(scene, [...sources.map(source => [source, core, '#08a997']), ...consumers.map(consumer => [core, consumer, '#1875a8'])], true);
});

document.querySelectorAll('.dc-hero-art').forEach(scene => {
  const workspace = scene.querySelector('.dc-device-card');
  connect(scene, [...scene.querySelectorAll('.dc-hero-tag')].map(tag => [workspace, tag, '#087cf0']), true);
});
document.querySelectorAll('.asi-ecosystem-diagram').forEach(scene => {
  const hub = scene.querySelector('.asi-ecosystem-hub');
  const actor = name => scene.querySelector(`.asi-actor-${name}`);
  const support = scene.querySelector('.asi-support');
  const labels = [...scene.querySelectorAll('.asi-connector-label')];
  const originalPositions = labels.map(label => [label, label.nextSibling]);
  const owners = ['prospects', 'referrals', 'bdms', 'bdms', 'managers', 'managers', 'admins', 'analytics'];
  const arrangeLabels = () => {
    labels.forEach((label, index) => {
      if (compact.matches) actor(owners[index])?.append(label);
    });
    if (!compact.matches) originalPositions.slice().reverse().forEach(([label, next]) => scene.insertBefore(label, next));
  };
  arrangeLabels();
  compact.addEventListener('change', arrangeLabels);
  const edges = [[actor('prospects'), actor('bdms'), '#00b98b'], [actor('prospects'), hub, '#00b98b']];
  [['referrals', '#ff8b00'], ['bdms', '#007dff'], ['managers', '#8430ff'], ['admins', '#ef2381'], ['analytics', '#00b98b']].forEach(([name, color]) => {
    edges.push([actor(name), hub, color], [hub, actor(name), color]);
  });
  edges.push([support, hub, '#007dff'], [hub, support, '#007dff']);
  connect(scene, edges, true);
});
