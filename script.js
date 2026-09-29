// Menú móvil
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Video del banner: reproducir/pausar
const video = document.querySelector('.hero video');
const toggle = document.querySelector('.video-toggle');
if (video && toggle) {
  const label = toggle.querySelector('span');
  const icon = toggle.querySelector('svg');
  const PAUSE = '<rect x="3" y="2" width="3.5" height="12"/><rect x="9.5" y="2" width="3.5" height="12"/>';
  const PLAY = '<path d="M4 2l10 6-10 6z"/>';
  const sync = () => {
    const playing = !video.paused;
    label.textContent = playing ? 'Pausar video' : 'Reproducir video';
    icon.innerHTML = playing ? PAUSE : PLAY;
  };
  // Si la persona pidió menos movimiento en su sistema, el video no arranca solo
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  } else {
    video.muted = true;
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  }
  toggle.addEventListener('click', () => { video.paused ? video.play() : video.pause(); });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  sync();
}

// Año en el pie de página
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
