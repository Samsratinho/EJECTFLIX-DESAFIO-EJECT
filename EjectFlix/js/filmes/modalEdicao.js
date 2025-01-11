/* // Seleção dos elementos
const modal1 = document.querySelector(".modal-1");
const openModalButton1 = document.querySelector(".btn-open-1");
const closeModalButton1 = document.querySelector(".close-1");

// Abrir modal
openModalButton1.addEventListener("click", () => {
    modal1.style.display = "flex";
});

// Fechar modal
closeModalButton1.addEventListener("click", () => {
    modal1.style.display = "none";
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
}); */