 let filmes = [] 
const endpointDaAPI = 'https://movies-api-juliocsoares.fly.dev/filmes'

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM2NDQ4Mzk4LCJpYXQiOjE3MzY0NDcxOTgsImp0aSI6ImEzMDFmY2U3N2RkNTQ0ZjA4Yzc5ZjVmMDRiYmUzNjBjIiwidXNlcl9pZCI6MTF9.SgfYg6oe8Lcmqf_QMJzCSjp6Uu4hMHGDOzRuqvqbviI';

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
