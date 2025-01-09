import { getApiUrl } from "../utils/getApiUrl.js"
const $email = document.querySelector("#email")
const $senha = document.querySelector("#senha")
const $submitBtn = document.querySelector("#submit-btn")
const $mensagemForm = document.querySelector("#mensagem-form")

// esperar correção de erro de cors
async function cadastrarUser(email, senha){
    $mensagemForm.textContent = ""

    try{
        const response = await axios.post(getApiUrl('usuario/register/'), {
            username: email.split('@')[0], //username vai ser o que vem antes do @ do email
            email,
            password: senha,
            confirm_password: senha,

        }) 

        if(response.status === 201){
        } else {
            $mensagemForm.textContent = "Erro ao cadastrar-se!"
            
        }


    } catch(error){
        console.error(error)
        $mensagemForm.textContent = "Erro ao cadastrar-se!"

    }
}

$submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    cadastrarUser($email.value, $senha.value)
})