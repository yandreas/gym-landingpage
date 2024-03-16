import View from './View.js';

class navView extends View {
  #header = document.querySelector('.header');
  #nav = document.querySelector('.nav');

  constructor() {
    super();
    this.#addStickyNav();
  }

  #addStickyNav = () => {
    const navHeight = this.#nav.getBoundingClientRect().height;

    const stickyNav = entries => {
      const [entry] = entries;

      if (!entry.isIntersecting) this.#nav.classList.add('sticky');
      else this.#nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(this.#header);
  };
}

export default new navView();
