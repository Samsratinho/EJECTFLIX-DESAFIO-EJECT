/* Função para pegar a Api */
let filmes = [] 
const endpointDaAPI = 'https://api.themoviedb.org/3/movie/now_playing'

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTVkY2Y5YWJjODRmMDkzNzBkOGE2OTgxNTY2ZjcwNyIsIm5iZiI6MTczNjU1MzY1NC40MDk5OTk4LCJzdWIiOiI2NzgxYjRiNjIxOGZkNTdhY2Y0ZWM0NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Vgey3l45Kk9eAs2ObIqifpXWAz8TW_acPhdTL2BH9i0';

getBuscarFilmesDaAPI();
const itemCarrosselFilmes = document.getElementById('filmes-1')

/* validação do acces_token */
async function getBuscarFilmesDaAPI() {
  try {
    const res = await fetch(endpointDaAPI, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });

    if (!res.ok) {
      /* deu errado demais */
      if (res.status === 401) {
        console.error("Autenticação falhou. Verifique o seu token da API.");
      } else {
        console.error(`Erro HTTP! Status: ${res.status}`);
      }
      return;
    }
    /* deu certo!!! */
    filmes = await res.json();
    console.table(filmes);
    exibirOsFilmesNaTela(filmes);
    /* deu errado mais ou menos */
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
/* caso a api tivess funcionando ia printar na tela os cards dos filmes */
function exibirOsFilmesNaTela(listaDeFilmes) {
  listaDeFilmes.forEach(filmes => {
    itemCarrosselFilmes.innerHTML += `
      <div class="carousel-cell">
        <div class="container-item-img">
            <img src="${filmes.poster_path}" alt="Imagem do item" class="item-img" />
            <div class="capa">
                <img src="../../img/plus.svg" alt="plus" class= "btn-open-1"></img>
                <p class="titulo">Titulo</p>
                <p class="generos">Aventura, Fantasia</p>
                <p class="ano-lancamento">2007</p>
            </div>
        </div>
    </div>
`
  })
}