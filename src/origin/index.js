const animationsMap = {
  slideInBl: 'slide-in-bl',
  slideInRight: 'slide-in-right',
  slideInBottom: 'slide-in-bottom',
  slitInVertical: 'slit-in-vertical',
  fadeInLeft: 'fade-in-left',
  fadeInRight: 'fade-in-right',
  pulsate: 'pulsate-fwd',
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const anim = animationsMap[entry.target.dataset.animate];
      if (anim) {
        entry.target.classList.toggle(anim, entry.isIntersecting);
      }

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
