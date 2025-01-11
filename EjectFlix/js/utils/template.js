// Aqui você irá criar os templates das divs que irão se repetir
const itemCarrosselFilmes = `
    <div class="carousel-cell">
        <div class="container-item-img">
            <img src="{img}" alt="Imagem do item" class="item-img" />
            <div class="capa">
                <img src="../../img/plus.svg" alt="plus" class= "btn-open-1"></img>
                <p class="titulo">Titulo</p>
                <p class="generos">Aventura, Fantasia</p>
                <p class="ano-lancamento">2007</p>
            </div>
        </div>
    </div>
`

{/* <button class="btn-open-1">Abrir Modal</button> */}

// Exporte todos os templates
export { itemCarrosselFilmes }