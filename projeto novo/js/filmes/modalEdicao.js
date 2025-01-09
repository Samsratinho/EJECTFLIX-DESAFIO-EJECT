document.addEventListener("DOMContentLoaded", function () {
    const modalEdit = document.getElementById("modalEdit"); // Novo modal
    const btnModalEdit = document.getElementById("plusModal"); // Botão do novo modal
    const spanCloseEdit = document.getElementById("closeEdit"); // Botão de fechar do novo modal

    function closeModalEditWithAnimation() {
        modalEdit.classList.add("close-animation-edit");

        setTimeout(() => {
            modalEdit.style.display = "none";
            modalEdit.classList.remove("close-animation-edit");
        }, 450);
    }

    btnModalEdit.onclick = function () {
        modalEdit.style.display = "flex"; // Mostrar o modal
        modalEdit.classList.add("open-animation-edit");

        setTimeout(() => {
            modalEdit.classList.remove("open-animation-edit");
        }, 450);
    };

    spanCloseEdit.onclick = closeModalEditWithAnimation;

    window.onclick = function (event) {
        if (event.target === modalEdit) {
            closeModalEditWithAnimation();
        }
    };
});



/* document.addEventListener("DOMContentLoaded", function () {
    const modalEdit = document.getElementById("modalEdit"); //modal la em cima
    const btnmodalEdit = document.getElementById("plusModal"); //adicionar filmes
    const spanCloseEdit = document.getElementById("closeEdit"); //close abaixo do modal

    function closeModalWithAnimation() {
        modalEdit.classList.add("fechar-animacao");

        setTimeout(() => {
            modalEdit.style.display = "none";
            modalEdit.classList.remove("fechar-animacao");
        }, 450);
    }

    btnmodalEdit.onclick = function () {
        modalEdit.style.display = "block";
        modalEdit.classList.add("abrir-animacao");

        setTimeout(() => {
            modalEdit.classList.remove("abrir-animacao");
        }, 450);
    };

    spanCloseEdit.onclick = closeModalWithAnimation;

    window.onclick = function (event) {
        if (event.target === modalEdit) {
            closeModalWithAnimation();
        }
    };
});  */