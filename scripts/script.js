addEventListener('DOMContentLoaded', () => {
  const chatWidget = document.getElementById('chatWidget');
  const whatsappIcon = document.getElementById('whatsappIcon');
  const closeBtn = document.getElementById('closeBtn');

  function toggleWidget() {
    chatWidget.style.display = chatWidget.style.display !== 'block' ? 'block' : 'none';
  }

  whatsappIcon.addEventListener('click', toggleWidget);
  closeBtn.addEventListener('click', toggleWidget);

  // Script para tener lazy loading en backgrounds de css
  const lazyBgItems = document.querySelectorAll(".service-item");

  const lazyBgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyBg = entry.target;
        const bgImage = lazyBg.dataset.bg; // Obtén la imagen de fondo desde data-bg
        if (bgImage) {
          lazyBg.style.backgroundImage = `url(${bgImage})`;
          lazyBg.classList.add("lazy-bg-loaded"); // Clase opcional para animación
          observer.unobserve(lazyBg); // Deja de observar una vez cargado
        }
      }
    });
  });

  lazyBgItems.forEach((item) => {
    lazyBgObserver.observe(item);
  });

})

