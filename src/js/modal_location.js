(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open__location]"),
    closeModalBtn: document.querySelector("[modal-close__location]"),
    modal: document.querySelector("[modal__location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();