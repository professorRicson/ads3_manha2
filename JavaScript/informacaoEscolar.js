document.addEventListener('DOMContentLoaded', () => {
    const iconeSair = document.getElementById('iconeSair');
    const iconeVoltar = document.getElementById('iconeVoltar');

    iconeSair.addEventListener('click', () => {
        window.location.href = 'Login.html'; 
    });

    iconeVoltar.addEventListener('click', () => {
        window.location.href = 'InfoSocioeconomicas.html';
    });
});

// Função para carregar os dados do formulário do localStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('dadosFormulario')) || {};

    // Carregar os dados dos campos de texto
    document.getElementById('Serie').value = dados.serie || '';
    document.getElementById('CID').value = dados.cid || '';

    // Selecionar o rádio correspondente para "O usuário está matriculado na rede regular de ensino?"
    const matriculadoRadios = document.querySelectorAll('input[name="matriculado"]');
    matriculadoRadios.forEach(radio => {
        if (radio.value === dados.matriculado) {
            radio.checked = true;
        }
    });

    // Selecionar o rádio correspondente para "A criança/adolescente possui mediador para auxiliar nas atividades dentro da escola"
    const mediadorRadios = document.querySelectorAll('input[name="mediador"]');
    mediadorRadios.forEach(radio => {
        if (radio.value === dados.mediador) {
            radio.checked = true;
        }
    });

    // Selecionar o rádio correspondente para "A escola é"
    const escolaTipoRadios = document.querySelectorAll('input[name="escolaTipo"]');
    escolaTipoRadios.forEach(radio => {
        if (radio.value === dados.escolaTipo) {
            radio.checked = true;
        }
    });

    // Selecionar o rádio correspondente para "Turno que estuda"
    const turnoRadios = document.querySelectorAll('input[name="turno"]');
    turnoRadios.forEach(radio => {
        if (radio.value === dados.turno) {
            radio.checked = true;
        }
    });
}

// Função para adicionar novos dados e atualizar o localStorage
function adicionar() {
    const serie = document.getElementById('Serie').value;
    const cid = document.getElementById('CID').value;

    // Obter o valor do rádio selecionado para "O usuário está matriculado na rede regular de ensino?"
    const matriculado = document.querySelector('input[name="matriculado"]:checked');
    const matriculadoValue = matriculado ? matriculado.value : '';

    // Obter o valor do rádio selecionado para "A criança/adolescente possui mediador para auxiliar nas atividades dentro da escola"
    const mediador = document.querySelector('input[name="mediador"]:checked');
    const mediadorValue = mediador ? mediador.value : '';

    // Obter o valor do rádio selecionado para "A escola é"
    const escolaTipo = document.querySelector('input[name="escolaTipo"]:checked');
    const escolaTipoValue = escolaTipo ? escolaTipo.value : '';

    // Obter o valor do rádio selecionado para "Turno que estuda"
    const turno = document.querySelector('input[name="turno"]:checked');
    const turnoValue = turno ? turno.value : '';

    // Verificar se todos os campos estão preenchidos
    if (!serie || !cid || !matriculadoValue || !mediadorValue || !escolaTipoValue || !turnoValue) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Recuperar dados existentes do localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    // Verificar se o contato já existe
    const contatoExiste = contatos.some(contato => 
        contato.serie === serie &&
        contato.cid === cid &&
        contato.matriculado === matriculadoValue &&
        contato.mediador === mediadorValue &&
        contato.escolaTipo === escolaTipoValue &&
        contato.turno === turnoValue
    );

    if (contatoExiste) {
        alert("Contato já existe.");
        return;
    }

    // Criar novo contato
    const novoContato = {
        serie,
        cid,
        matriculado: matriculadoValue,
        mediador: mediadorValue,
        escolaTipo: escolaTipoValue,
        turno: turnoValue
    };

    // Adicionar novo contato à lista de contatos
    contatos.push(novoContato);

    // Atualizar o localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Atualizar os dados do formulário
    const dadosFormulario = { serie, cid, matriculado: matriculadoValue, mediador: mediadorValue, escolaTipo: escolaTipoValue, turno: turnoValue };
    localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));

    console.log(dadosFormulario);

    // Redirecionar ou realizar outra ação se necessário
    window.location.replace("tiposAtendimentos.html");
}

// Carregar contatos e dados do formulário quando a página for carregada
window.onload = function() {
    carregarDados();
};
