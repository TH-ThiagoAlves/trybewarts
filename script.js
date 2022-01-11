let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let botao = document.querySelector('#entrar')

botao.addEventListener('click', validacao);

function validacao ( ) {
    if (email.value == 'tryber@teste.com' && senha.value == 123456) {
        return alert('Olá, Tryber!');
    }else {
        alert('Email ou senha inválidos.')
    }
}