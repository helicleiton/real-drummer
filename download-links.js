fetch('download-links.json')
  .then(response => response.ok ? response.json() : Promise.reject(new Error('Download config unavailable')))
  .then(({ releaseBase }) => {
    if (!releaseBase) return;
    for (const link of document.querySelectorAll('[data-release]')) {
      link.href = `${releaseBase}/${encodeURIComponent(link.dataset.release)}`;
      link.removeAttribute('aria-disabled');
    }
    const status = document.getElementById('downloadStatus');
    if (status) status.textContent = 'Downloads oficiais da última versão publicada.';
  })
  .catch(() => {
    const status = document.getElementById('downloadStatus');
    if (status) status.textContent = 'Os instaladores aparecerão aqui após a primeira release do GitHub.';
  });
