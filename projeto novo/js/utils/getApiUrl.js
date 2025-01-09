let filmes = [] 
const endpointDaAPI = 'https://movies-api-juliocsoares.fly.dev/filmes'

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM2NDUxNjM5LCJpYXQiOjE3MzY0NTA0MzksImp0aSI6IjU5ZTU1ZjQxZmQxYTQ5NTA5YTAwOWZkNjhkZmYxZjg4IiwidXNlcl9pZCI6MTF9.EEPBmrp9mRimTkx0LO8qKp9uwUlxMp3ew5vLFkKo7QA';

getBuscarFilmesDaAPI();

async function getBuscarFilmesDaAPI() {
  try {
    const res = await fetch(endpointDaAPI, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });

    if (!res.ok) {
      if (res.status === 401) {
        console.error("Autenticação falhou. Verifique o seu token da API.");
      } else {
        console.error(`Erro HTTP! Status: ${res.status}`);
      }
      return;
    }

    filmes = await res.json();
    console.table(filmes);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
