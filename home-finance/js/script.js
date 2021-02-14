const Modal = {
    open() {
      // abrir o modal
      // add a class active ao modal
      document.querySelector(".modal-overlay").classList.add("active");
    },
    close() {
      // fechar o modal
      // remocer a class active modal
      //
      document.querySelector(".modal-overlay").classList.remove("active");
    },
  };