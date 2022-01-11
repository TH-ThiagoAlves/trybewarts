const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#entrar');
const textarea = document.querySelector('#textarea');
let counter = document.querySelector('#counter');

function validacao () {
    if (email.value == 'tryber@teste.com' && senha.value == 123456) {
        return alert('Olá, Tryber!');
    }else {
        alert('Email ou senha inválidos.')
    }
}

function counterCaracter (textarea) {
    let decrementar = 0;
    console.log(textarea.target.innerText)
    for (let i = 0; i < counter.target.innerText.length; i++) {
        decrementar = decrementar + 1;
    }
    counter.innerText = parseInt(counter.innerText) - decrementar;
    

}


textarea.addEventListener('keyup', counterCaracter);
botao.addEventListener('click', validacao);

