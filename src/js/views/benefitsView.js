import View from './View.js';

class benefitsView extends View {
  #tabs = document.querySelectorAll('.benefits__tab');
  #tabsContainer = document.querySelector('.benefits__tab-container');
  #tabsContent = document.querySelectorAll('.benefits__content');

  constructor() {
    super();
    this.#addTabbing();
  }

  #addTabbing = () => {
    this.#tabsContainer.addEventListener('click', e => {
      const clicked = e.target.closest('.benefits__tab');

      if (!clicked) return;

      this.#tabs.forEach(t => t.classList.remove('benefits__tab--active'));
      this.#tabsContent.forEach(c =>
        c.classList.remove('benefits__content--active')
      );

      clicked.classList.add('benefits__tab--active');

      document
        .querySelector(`.benefits__content--${clicked.dataset.tab}`)
        .classList.add('benefits__content--active');
    });
  };
}

export default new benefitsView();
