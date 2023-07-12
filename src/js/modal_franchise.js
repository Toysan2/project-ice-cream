(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open__franchise]"),
    closeModalBtn: document.querySelector("[modal-close__franchise]"),
    modal: document.querySelector("[modal__franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();