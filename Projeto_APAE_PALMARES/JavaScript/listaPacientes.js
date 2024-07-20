document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconeSair');

image.addEventListener('click', () => {
    window.location.href = 'Login.html'; 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconeVoltar');

image.addEventListener('click', () => {
    window.location.href = 'index.html';
 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconeVoltar');

image.addEventListener('click', () => {
    window.location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/ListaFuncionario.html';
 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconeVoltar');

image.addEventListener('click', () => {
    window.location.href = 'index.html';
 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconelataLixo');

image.addEventListener('click', () => {
    window.location.href = 'Matricula.html';
 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconelataLixo2');

image.addEventListener('click', () => {
    window.location.href = 'Matricula.html';
 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconelataLixo3');

image.addEventListener('click', () => {
    window.location.href = 'Matricula.html';
 
});
});

function remover(){
    const item = document.querySelector("div");
    const container = item.parentNode;
    container.removeChild(item);

}

