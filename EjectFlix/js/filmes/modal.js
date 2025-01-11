/* Js do Primeiro modal */
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btnmodal = document.getElementById("btn-modal");
    const spanClose = document.getElementById("close");

    function closeModalWithAnimation() {
        modal.classList.add("close-animation");

        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("close-animation");
        }, 450);
    }

    btnmodal.onclick = function () {
        modal.style.display = "block";
        modal.classList.add("open-animation");

        setTimeout(() => {
            modal.classList.remove("open-animation");
        }, 450);
    };

    spanClose.onclick = closeModalWithAnimation;

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModalWithAnimation();
        }
    };
});
