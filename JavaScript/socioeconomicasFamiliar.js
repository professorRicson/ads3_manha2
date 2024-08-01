document.addEventListener('DOMContentLoaded', () => {
    const iconeSair = document.getElementById('iconeSair');
    const iconeVoltar = document.getElementById('iconeVoltar');

    if (iconeSair) {
        iconeSair.addEventListener('click', () => {
            window.location.href = 'Login.html'; 
        });
    }

    if (iconeVoltar) {
        iconeVoltar.addEventListener('click', () => {
            window.location.href = 'Matricula.html';
        });
    }
});

// Função para carregar os dados do formulário do localStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('dadosFormulario')) || {};

    document.getElementById('composicao').value = dados.composicao || '';
    document.getElementById('trabalham').value = dados.trabalham || '';
    document.getElementById('componente').value = dados.componente || '';

    // Selecionar o rádio correspondente para "Recebe BPC"
    const bpcRadios = document.querySelectorAll('input[name="BPC"]');
    bpcRadios.forEach(radio => {
        if (radio.value === dados.bpc) {
            radio.checked = true;
        }
    });

    // Selecionar o rádio correspondente para "Recebe Bolsa Familia"
    const rbfRadios = document.querySelectorAll('input[name="RBF"]');
    rbfRadios.forEach(radio => {
        if (radio.value === dados.rbf) {
            radio.checked = true;
        }
    });

    // Selecionar o rádio correspondente para "Ao todo a renda familiar é"
    const rendaRadios = document.querySelectorAll('input[name="renda"]');
    rendaRadios.forEach(radio => {
        if (radio.value === dados.renda) {
            radio.checked = true;
        }
    });

    // Selecionar o rádio correspondente para "Residência"
    const residenciaRadios = document.querySelectorAll('input[name="residencia"]');
    residenciaRadios.forEach(radio => {
        if (radio.value === dados.residencia) {
            radio.checked = true;
        }
    });
}

// Função para adicionar novos dados e atualizar o localStorage
function adicionar() {
    const composicao = document.getElementById('composicao').value;
    const trabalham = document.getElementById('trabalham').value;
    const componente = document.getElementById('componente').value;

    // Obter o valor do rádio selecionado para "Recebe BPC"
    const bpc = document.querySelector('input[name="BPC"]:checked');
    const bpcValue = bpc ? bpc.value : ''; // Valor padrão se nenhum rádio estiver selecionado

    // Obter o valor do rádio selecionado para "Recebe Bolsa Familia"
    const rbf = document.querySelector('input[name="RBF"]:checked');
    const rbfValue = rbf ? rbf.value : ''; // Valor padrão se nenhum rádio estiver selecionado

    // Obter o valor do rádio selecionado para "Ao todo a renda familiar é"
    const renda = document.querySelector('input[name="renda"]:checked');
    const rendaValue = renda ? renda.value : ''; // Valor padrão se nenhum rádio estiver selecionado

    // Obter o valor do rádio selecionado para "Residência"
    const residencia = document.querySelector('input[name="residencia"]:checked');
    const residenciaValue = residencia ? residencia.value : ''; // Valor padrão se nenhum rádio estiver selecionado

    // Verificar se todos os campos estão preenchidos
    if (!composicao || !trabalham || !componente || !bpcValue || !rbfValue || !rendaValue || !residenciaValue) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Recuperar dados existentes do localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    // Verificar se o contato já existe
    const contatoExiste = contatos.some(contato => 
        contato.composicao === composicao &&
        contato.trabalham === trabalham &&
        contato.componente === componente &&
        contato.bpc === bpcValue &&
        contato.rbf === rbfValue &&
        contato.renda === rendaValue &&
        contato.residencia === residenciaValue
    );

    if (contatoExiste) {
        alert("Contato já existe.");
        return;
    }

    // Criar novo contato
    const novoContato = {
        composicao,
        trabalham,
        componente,
        bpc: bpcValue,
        rbf: rbfValue,
        renda: rendaValue,
        residencia: residenciaValue
    };

    // Adicionar novo contato à lista de contatos
    contatos.push(novoContato);

    // Atualizar o localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Atualizar os dados do formulário
    const dadosFormulario = { composicao, trabalham, componente, bpc: bpcValue, rbf: rbfValue, renda: rendaValue, residencia: residenciaValue };
    localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));

    console.log(dadosFormulario);

    // Redirecionar ou realizar outra ação se necessário
    window.location.replace("InformacaoEscolar.html");
}

// Carregar contatos e dados do formulário quando a página for carregada
window.onload = function() {
    carregarDados();
};
