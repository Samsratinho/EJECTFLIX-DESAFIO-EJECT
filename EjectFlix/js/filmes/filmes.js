import { renderizarDivs } from "../utils/utils.js";
import { itemCarrosselFilmes } from "../utils/template.js";
import { itemCarrosselFilmesData, itemCarrosselFilmesData2 } from "../utils/data.js";

renderizarDivs("carrossel-filmes-1", itemCarrosselFilmesData, itemCarrosselFilmes)
renderizarDivs("carrossel-filmes-2", itemCarrosselFilmesData2, itemCarrosselFilmes)
