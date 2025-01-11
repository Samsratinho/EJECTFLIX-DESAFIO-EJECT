async function login(username, password) {
    try {
        const response = await axios.post('https://movies-api-juliocsoares.fly.dev/usuario/login/', {
            username: username,
            password: password
        });

        console.log('Login bem-sucedido:', response.data);

        // Exemplo: salvando token retornado
        const token = response.data.token;
        localStorage.setItem('token', token);
    } catch (error) {
        console.error('Erro no login:', error.response?.data || error.message);
    }
}

// Exemplo de chamada da função
login('Samuel-Silva-de-Lima', 'SamEject.1306');
