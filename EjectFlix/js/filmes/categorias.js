// Seleção do botão e da nav bar de categorias
const btnCategorias = document.getElementById("btn-categorias");
const categoriesNav = document.getElementById("categories-parent");

// Função para alternar a visibilidade usando estilos inline
btnCategorias.addEventListener("click", function () {
    if (categoriesNav.style.display === "none") {
        categoriesNav.style.display = "block"; // Mostra a nav bar
    } else {
        categoriesNav.style.display = "none"; // Oculta a nav bar
    }
});
