function observeElement(element, className = '') {
  if (!element) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && className) {
        entry.target.classList.add(className);
        return;
      }

      if (entry.isIntersecting) {
        element.currentTime = 0;
        element.play();
      }
    });
  });

  observer.observe(element);
}

window.addEventListener('load', () => {
  const listServices = document.querySelectorAll('#list-services li');

  listServices.forEach((item, index) => {
    if (index === 0) {
      observeElement(item, 'fade-in-left');
    } else {
      setTimeout(() => {
        observeElement(item, 'fade-in-left');
      }, index * 300);
    }
  });

//   const video = document.querySelector('.video video');
//   observeElement(video);

  const teamTag = document.querySelector('.team-tag');
  observeElement(teamTag, 'slide-in-blurred-right');

  const professionalItems = document.querySelectorAll('[data-professional]');
  professionalItems.forEach(item => {
    observeElement(item, 'puff-in-ver');
  });

  const itemsTestimonials = document.querySelectorAll('.item');
  itemsTestimonials.forEach((item, index) => {
    if (index % 2 === 0) {
      observeElement(item, 'slide-in-blurred-right');
    } else {
      observeElement(item, 'slide-in-blurred-left');
    }
  });

  const iconSocials = document.querySelectorAll('.footer a > img');
  iconSocials.forEach(item => {
    observeElement(item, 'bounce-top');
  });
});
