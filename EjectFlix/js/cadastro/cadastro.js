/* Botão de ligação de janelas */
const botao = document.getElementById("submit-btn-1");

        botao.addEventListener("click", (event) => {

            event.preventDefault();

            window.location.href = "../../index.html";
        });


/* Quando tiver api validar o email e senha e mandar o token */

/* import { getApiUrl } from "../utils/getApiUrl.js"
const $email = document.querySelector("#email")
const $senha = document.querySelector("#senha")
const $submitBtn = document.querySelector("#submit-btn-1")
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
}) */