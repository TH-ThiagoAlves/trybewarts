const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#entrar');
const textarea = document.querySelector('#textarea');
let counter = document.querySelector('#counter');
let agreement = document.getElementById('agreement');
let botaoEnviar = document.getElementById('submit-btn');

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

textarea.addEventListener('input', () => {counter.innerText = (500 - textarea.value.length);});

botao.addEventListener('click', () => {email.value == 'tryber@teste.com' && senha.value == 123456 ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.'); });