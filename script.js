let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let botao = document.querySelector('#entrar');
let agreement = document.getElementById('agreement');
let botaoEnviar = document.getElementById('submit-btn');

botao.addEventListener('click', validacao);

function validacao ( ) {
    if (email.value == 'tryber@teste.com' && senha.value == 123456) {
        return alert('Olá, Tryber!');
    }else {
        alert('Email ou senha inválidos.')
    }
}

// Função que habilita o botão 'enviar' se o usuário concordar com o uso dos dados
agreement.addEventListener('click', function submitControl(){
    if (agreement.checked === true) {
        botaoEnviar.removeAttribute('disabled')
    } else {
        botaoEnviar.setAttribute('disabled', true)
    }
})


