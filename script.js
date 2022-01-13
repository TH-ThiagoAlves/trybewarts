const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#entrar');
const formulario = document.getElementById('evaluation-form');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const agreement = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');

function validacao() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Função que habilita o botão 'enviar' se o usuário concordar com o uso dos dados
agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    botaoEnviar.removeAttribute('disabled');
    botaoEnviar.style.opacity = 1;
  } else {
    botaoEnviar.setAttribute('disabled', true);
    botaoEnviar.style.opacity = 0.8;
  }
});

function counterCaracter(comment) {
  const decrementar = comment.target.value.length;
  if (parseInt(counter.innerText) <= 0) {
    return counter.innerText = 0;
  }
  counter.innerText = parseInt(counter.innerText) - 1;
}

textarea.addEventListener('keyup', counterCaracter);
botao.addEventListener('click', validacao);

// Funcionalidade que limpa o formulário e preenche com os dados
//  inseridos pelo usuário

const inputName = () =>
  `${document.getElementById('input-name').value}
  ${document.getElementById('input-lastname').value}`;
const inputEmail = () =>
  `${document.getElementById('input-email').value}`;
const selectHouse = () =>
  `${document.getElementById('house').value}`;
const radioFamily = () => {
  const family = document.getElementsByName('family');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return `${family[i].value}`;
    }
  }
};
const selectedContent = () => {
  const content = document.getElementsByClassName('subject');
  const selected = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked && content[i] !== content[content.length - 1]) {
      selected.push(`${content[i].value}`);
    }
  } return `${selected.join(', ')}.`;
};
const radioRate = () => {
  const rate = document.getElementsByName('rate');
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      return `${rate[i].value}`;
    }
  }
};
const comments = () =>
  `${document.getElementById('textarea').value}`;

const hideForm = () => {
  for (let i = 1; i < formulario.children.length; i += 1) {
    formulario.children[i].setAttribute('style', 'display: none');
  }
};
const anexar = (chave, valor) => {
  const info = document.createElement('li');
  info.innerHTML = `${chave} ${valor}`;
  info.className = 'item-lista';
  formulario.appendChild(info);
};

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const temp = {
    Nome: inputName(),
    Email: inputEmail(),
    Casa: selectHouse(),
    Família: radioFamily(),
    Matérias: selectedContent(),
    Avaliação: radioRate(),
    Observações: comments(),
  };
  hideForm();
  anexar('Nome: ', temp.Nome);
  anexar('Email: ', temp.Email);
  anexar('Casa: ', temp.Casa);
  anexar('Família: ', temp.Família);
  anexar('Matérias: ', temp.Matérias);
  anexar('Avaliação: ', temp.Avaliação);
  anexar('Observações: ', temp.Observações);
});
