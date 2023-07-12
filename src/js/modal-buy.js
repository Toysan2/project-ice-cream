(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalBuy-open]'),
    closeModalBtn: document.querySelector('[data-modalBuy-close]'),
    modal: document.querySelector('[data-modalBuy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-buy');
  }
})();
