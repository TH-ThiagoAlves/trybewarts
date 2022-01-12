const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#entrar');
const textarea = document.querySelector('#textarea');
let counter = document.querySelector('#counter');
let decrementar = 0;
let agreement = document.getElementById('agreement');
let botaoEnviar = document.getElementById('submit-btn');


function validacao () {
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
        botaoEnviar.style.opacity = 1;
    } else {
        botaoEnviar.setAttribute('disabled', true)
        botaoEnviar.style.opacity = 0.8;
    }
})

function counterCaracter (comment) {
    if (parseInt(counter.innerText) <= 0) {
        return counter.innerText = 0
    }
    decrementar = comment.target.value.length;
    counter.innerText = parseInt(counter.innerText) - 1;
}

textarea.addEventListener('keyup', counterCaracter);
botao.addEventListener('click', validacao);