document.addEventListener('DOMContentLoaded', () => {
    const redirect = (selector, url) => {
        const element = document.getElementById(selector);
        if (element) {
            element.addEventListener('click', () => {
                window.location.href = url;
            });
        }
    };

    redirect('iconeSair', 'Login.html');
    redirect('iconeVoltar', 'ListaPacientes.html');
});


function atualizarImagem() {
    const imageContainer = document.getElementById('imageContainer');
    const imagemSalva = localStorage.getItem('imagemSalva');
    
    imageContainer.innerHTML = imagemSalva 
        ? `<img src="${imagemSalva}" style="max-width: 20%; margin-top: 12%; margin-left: 13%;">` 
        : '<label for="iconeInput"><img id="iconePessoa" src="../Imagens/pessoa.webp"></label>';
}

function salvarImagem(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            localStorage.setItem('imagemSalva', e.target.result);
            atualizarImagem();
        };
        reader.readAsDataURL(file);
    }
}

// Inicializar a imagem ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarImagem);

// Adicionar o listener ao input para salvar a imagem
document.getElementById('iconeInput').addEventListener('change', salvarImagem);

// Função para carregar os dados do formulário do localStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('dadosFormulario')) || {};

    document.getElementById('Usuario').value = dados.nome || '';
    document.getElementById('CID').value = dados.cid || '';
    document.getElementById('Date').value = dados.date || '';
    document.getElementById('vinculo').value = dados.vinculo || '';
    document.getElementById('Telefone').value = dados.telefone || '';
    document.getElementById('Responsavel').value = dados.responsavel || '';
}

// Função para carregar os dados do formulário do localStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('dadosFormulario')) || {};

    document.getElementById('Usuario').value = dados.usuario || '';
    document.getElementById('CID').value = dados.cid || '';
    document.getElementById('Date').value = dados.date || '';
    document.getElementById('Telefone').value = dados.telefone || '';
    document.getElementById('Responsavel').value = dados.responsavel || '';

    // Selecionar o rádio correspondente
    const vinculoRadios = document.querySelectorAll('input[name="vinculo"]');
    vinculoRadios.forEach(radio => {
        if (radio.value === dados.vinculo) {
            radio.checked = true;
        }
    });
}

// Função para adicionar novos dados e atualizar o localStorage
function adicionar() {
    const usuario = document.getElementById('Usuario').value;
    const cid = document.getElementById('CID').value;
    const data = document.getElementById('Date').value;
    const responsavel = document.getElementById('Responsavel').value;
    const telefone = document.getElementById('Telefone').value;

    // Obter o valor do rádio selecionado
    const vinculo = document.querySelector('input[name="vinculo"]:checked');
    const vinculoValue = vinculo ? vinculo.value : ''; // Valor padrão se nenhum rádio estiver selecionado

    // Verificar se todos os campos estão preenchidos
    if (!usuario || !cid || !data || !responsavel || !telefone || !vinculoValue) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Recuperar dados existentes do localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    // Verificar se o contato já existe
    const contatoExiste = contatos.some(contato => 
        contato.usuario === usuario &&
        contato.cid === cid &&
        contato.data === data &&
        contato.responsavel === responsavel &&
        contato.telefone === telefone &&
        contato.vinculo === vinculoValue
    );

    if (contatoExiste) {
        alert("Contato já existe.");
        return;
    }

    // Criar novo contato
    const novoContato = {
        usuario,
        cid,
        data,
        responsavel,
        telefone,
        vinculo: vinculoValue
    };

    // Adicionar novo contato à lista de contatos
    contatos.push(novoContato);

    // Atualizar o localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Atualizar os dados do formulário
    const dadosFormulario = { usuario, cid, date: data, vinculo: vinculoValue, telefone, responsavel };
    localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));

    console.log(dadosFormulario)

    // Redirecionar ou realizar outra ação se necessário
    window.location.replace("InfoSocioeconomicas.html");
}

// Carregar contatos e dados do formulário quando a página for carregada
window.onload = function() {
    carregarDados();
};
