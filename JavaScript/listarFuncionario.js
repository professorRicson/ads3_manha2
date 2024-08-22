document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        { id: 'iconeSair', href: 'Login.html' },
        { id: 'iconeVoltar', href: 'index.html' },
        { id: 'iconeVoltar2', href: 'CadastrarFuncionario.html' },
        { id: 'iconelataLixo', href: 'CadastrarFuncionario.html' },
  
    ];

    elements.forEach(({ id, href }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => {
                window.location.href = href;
            });
        }
    });
});


function remover(event) {
    // Obtém o item a ser removido
    const item = event.target.closest('.ListaPacientes');
    if (item) {
        item.remove();
    }
}

function exibirFuncionarios() {
    const lista = document.getElementById('ListaPacientes');
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

    // Usar um Set para armazenar nomes únicos
    const nomesUnicos = new Set();
    const funcionariosUnicos = funcionarios.filter(f => {
        if (nomesUnicos.has(f.nome)) {
            return false; // Se o nome já estiver no Set, filtrar o item
        }
        nomesUnicos.add(f.nome); // Adicionar o nome ao Set
        return true; // Caso contrário, manter o item
    });

    // Limpar o conteúdo atual
    lista.innerHTML = '';

    // Adicionar funcionários únicos
    lista.innerHTML = funcionariosUnicos.map((f, index) => `
        <div id="item-${index}" class="ListaPacientes">
            <img id="iconelataLixo" onclick="redirecionarParaCadastrarFuncionario()" src="Imagens/altera.png"/>
            <img id="iconealterar" onclick="remover(event)" src="Imagens/cone-de-lata-de-lixo-plana.webp"/>
            <p>${f.nome}</p>
        </div>
    `).join('');
}

function redirecionarParaCadastrarFuncionario() {
    window.location.href = 'CadastrarFuncionario.html';
}

window.onload = exibirFuncionarios;


