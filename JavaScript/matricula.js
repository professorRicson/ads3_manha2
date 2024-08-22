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
        : '<label for="iconeInput"><img id="iconePessoa" src="Imagens/pessoa.webp"></label>';
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

// Função que será chamada ao clicar no botão "PRÓXIMO"
function adicionar() {
    // Redireciona para a página desejada
    window.location.href = 'InfoSocioeconomicas.html'; // Substitua 'paginaDestino.html' pelo URL da página para a qual deseja redirecionar
}

// Adiciona um ouvinte de evento para garantir que o código só execute após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o botão pelo ID e adiciona um listener de clique
    const botao = document.getElementById('proximaPagina');
    if (botao) {
        botao.addEventListener('click', adicionar);
    }
});

// Função para adicionar dados ao localStorage
function adicionarDados() {
    // Obtém os dados do formulário
    const usuario = document.getElementById('Usuario').value;
    
    // Armazena os dados no localStorage
    localStorage.setItem('usuarioNome', usuario);

    // Redireciona para a página de lista de pacientes
    window.location.href = 'ListaPacientes.html';
}

