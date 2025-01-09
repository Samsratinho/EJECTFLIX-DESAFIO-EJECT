import { getApiUrl } from './utils/getApiUrl.js';

const $email = document.querySelector("#email")
const $password = document.querySelector("#password")
const $submitBtn = document.querySelector("#submit-btn")

async function fazerLogin(email, password){
    try{
        const response = await axios.post(getApiUrl('usuario/login/'), {
            username: email.split('@')[0],
            email,
            password
        })

        if(response){
            console.log(response.data)
            checarAutenticacaoERedirecionar()
        }

    } catch(error){
        console.error(error)
    }
}

async function checarAutenticacaoERedirecionar(){
    try{
        const token = await cookieStore.get('access_token').then(cookie => cookie?.value);

        if(!token){
            console.log('deu ruim pra obter o token')
        }

        const response = await axios.get(getApiUrl('filmes'),{
            headers:{
                'Authorization': `Bearer `
            }
        })
        if(response){
            console.log(response)
        }
    } catch(error){
        console.error(error)
    }
}

//checarAutenticacaoERedirecionar()

$submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    fazerLogin($email.value, $password.value)
})
