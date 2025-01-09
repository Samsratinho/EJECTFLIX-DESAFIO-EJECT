let filmes = [] 

const endpointDaAPI = 'https://movies-api-juliocsoares.fly.dev/filmes/'
const API_TOKEN = 'YOUR_ACTUAL_API_TOKEN'; 

getBuscarFilmesDaAPI() 

async function getBuscarFilmesDaAPI() {
  try {
    const res = await fetch(endpointDaAPI, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });

    if (!res.ok) {
      if (res.status === 401) {
        console.error("Authentication failed.  Check your API token.");
      } else {
        console.error(`HTTP error! status: ${res.status}`);
      }
      return;
    }

    filmes = await res.json();
    console.table(filmes);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}