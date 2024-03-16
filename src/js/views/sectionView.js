import View from './View.js';

class sectionView extends View {
  #navLinks = document.querySelector('.nav__links');
  #learnButton = document.querySelector('.btn--scroll-to');
  #section1 = document.querySelector('#section--1');
  #allSections = document.querySelectorAll('.section');
  #nav = document.querySelector('.nav');

  constructor() {
    super();
    this.#addScrollingLearn();
    this.#addReveal();
    this.#addScrollingNav();
    this.#addMenufade();
  }

  #addMenufade = () => {
    const handleHover = function (e) {
      if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
          if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
      }
    };

    this.#nav.addEventListener('mouseover', handleHover.bind(0.5));
    this.#nav.addEventListener('mouseout', handleHover.bind(1));
  };

  #addScrollingNav = () => {
    this.#navLinks.addEventListener('click', function (e) {
      e.preventDefault();

      if (!e.target.classList.contains('nav__link--btn')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  #addScrollingLearn = () => {
    this.#learnButton.addEventListener('click', () => {
      this.#section1.scrollIntoView({ behavior: 'smooth' });
    });
  };

  #addReveal = () => {
    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    this.#allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  };
}

export default new sectionView();
