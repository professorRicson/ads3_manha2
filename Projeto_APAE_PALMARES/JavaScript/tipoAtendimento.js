document.addEventListener('DOMContentLoaded', () => {
    const iconeSair = document.getElementById('iconeSair');
    const iconeVoltar = document.getElementById('iconeVoltar');

    if (iconeSair) {
        iconeSair.addEventListener('click', () => {
            window.location.href = '../Html/Login.html'; 
        });
    }

    if (iconeVoltar) {
        iconeVoltar.addEventListener('click', () => {
            window.location.href = '../Html/InformacaoEscolar.html';
        });
    }
});

// Função para carregar os dados do formulário do localStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('dadosFormulario')) || {};

    document.querySelector('input[name="Fisioterapia"][value="' + (dados.Fisioterapia || '') + '"]').checked = true;
    document.querySelector('input[name="Pintura"][value="' + (dados.Pintura || '') + '"]').checked = true;
    document.querySelector('input[name="Musicoterapia"][value="' + (dados.Musicoterapia || '') + '"]').checked = true;
    document.querySelector('input[name="Psicologia"][value="' + (dados.Psicologia || '') + '"]').checked = true;
    document.querySelector('input[name="Psicopedagogia"][value="' + (dados.Psicopedagogia || '') + '"]').checked = true;
    document.querySelector('input[name="Educação física"][value="' + (dados['Educação física'] || '') + '"]').checked = true;
}

// Função para adicionar novos dados e atualizar o localStorage
function adicionar() {
    // Obter os valores dos inputs
    const dados = {
        Fisioterapia: document.querySelector('input[name="Fisioterapia"]:checked')?.value || '',
        Pintura: document.querySelector('input[name="Pintura"]:checked')?.value || '',
        Musicoterapia: document.querySelector('input[name="Musicoterapia"]:checked')?.value || '',
        Psicologia: document.querySelector('input[name="Psicologia"]:checked')?.value || '',
        Psicopedagogia: document.querySelector('input[name="Psicopedagogia"]:checked')?.value || '',
        'Educação física': document.querySelector('input[name="Educação física"]:checked')?.value || '',
    };

    // Verificar se todos os campos estão preenchidos
    if (Object.values(dados).includes('')) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Recuperar dados existentes do localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    // Verificar se o contato já existe
    const contatoExiste = contatos.some(contato => 
        Object.keys(dados).every(key => contato[key] === dados[key])
    );

    if (contatoExiste) {
        alert("Contato já existe.");
        return;
    }

    // Adicionar novo contato à lista de contatos
    contatos.push(dados);

    // Atualizar o localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Atualizar os dados do formulário
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));

    console.log(dados);

    // Redirecionar ou realizar outra ação se necessário
    window.location.replace("../Html/ListaPacientes.html");
}

// Carregar dados do formulário quando a página for carregada
window.onload = function() {
    carregarDados();

    // Adicionar evento de clique ao botão FINALIZAR
    const botaoFinalizar = document.getElementById('proximo');
    if (botaoFinalizar) {
        botaoFinalizar.addEventListener('click', adicionar);
    }
};