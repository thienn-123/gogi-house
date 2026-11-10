(() => {
  const tabs = [...document.querySelectorAll('[data-menu-panel]')];
  const panels = [...document.querySelectorAll('.menu-redesign-panel')];

  tabs.forEach(tab => tab.addEventListener('click', () => {
    const activePanel = tab.dataset.menuPanel;

    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    panels.forEach(panel => {
      panel.hidden = panel.id !== activePanel;
    });
  }));
})();
