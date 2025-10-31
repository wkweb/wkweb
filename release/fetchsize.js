(function () {
  // ========= FONCTION POUR AFFICHER LES TABLES =========
  function buildTable(tableId, items) {
    const tbody = document.getElementById(tableId);
    items.forEach(pkg => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${pkg.name}</td>
        <td>Windows</td>
        <td>${pkg.arch}</td>
        <td class="size">Loading…</td>
        <td><a class="btn" href="${pkg.url}">Download</a></td>
      `;
      tbody.appendChild(tr);
    });
  }

  buildTable('installer-table', LINKS.installer);
  buildTable('portable-table', LINKS.portable);

  // ========= DÉTECTION AUTOMATIQUE DES TAILLES =========
  async function fetchFileSize(url, cell) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      const len = res.headers.get('content-length');
      if (len) {
        const mb = (parseInt(len, 10) / (1024 * 1024)).toFixed(1);
        cell.textContent = mb + ' MB';
      } else cell.textContent = '—';
    } catch { cell.textContent = '—'; }
  }

  document.querySelectorAll('table .size').forEach(td => {
    const a = td.parentElement.querySelector('a.btn');
    if (a) fetchFileSize(a.href, td);
  });

  document.getElementById('y').textContent = new Date().getFullYear();

  // ======================================================
})();
