import View from './View.js';

class modalView extends View {
  #modal = document.querySelector('.modal');
  #overlay = document.querySelector('.overlay');
  #btnCloseModal = document.querySelector('.btn--close-modal');
  #btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  constructor() {
    super();
    this.#openButton();
    this.#closeButton();
  }

  #openModal = e => {
    e.preventDefault();
    this.#modal.classList.remove('hidden');
    this.#overlay.classList.remove('hidden');
  };

  #closeModal = () => {
    this.#modal.classList.add('hidden');
    this.#overlay.classList.add('hidden');
  };

  #openButton = () => {
    this.#btnsOpenModal.forEach(btn =>
      btn.addEventListener('click', this.#openModal)
    );
  };

  #closeButton = () => {
    this.#btnCloseModal.addEventListener('click', this.#closeModal);
    this.#overlay.addEventListener('click', this.#closeModal);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this.#modal.classList.contains('hidden')) {
        this.#closeModal();
      }
    });
  };
}

export default new modalView();
