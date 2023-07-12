(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open__read-more]'),
    closeModalBtn: document.querySelector('[modal-close__read-more]'),
    modal: document.querySelector('[modal__read-more]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
