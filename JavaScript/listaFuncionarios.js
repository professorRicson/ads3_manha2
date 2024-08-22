function mostrarSenha() {
    const olho = document.getElementById('olho');
    const senha = document.getElementById('senha');
    
    olho.addEventListener('mousedown', () => senha.type = 'text');
    olho.addEventListener('mouseup', () => senha.type = 'password');
  }

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
    redirect('iconeVoltar', 'listarFuncionarios.html');
});

function validarCadastro() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    // Verificar se todos os campos foram preenchidos
    if (nome === ' ' || email === ' ' || telefone === ' ' || senha === ' ') {
        alert('Por favor, preencha todos os campos.');
        window.location.href = 'CadastrarFuncionario.html'
    }

    // Validar telefone (apenas números)
    const telefoneRegex = /^[0-9]+$/;
    if (!telefoneRegex.test(telefone)) {
        alert('O telefone deve conter apenas números.');
        return;
    }

    // Validar senha (mais de 8 dígitos)
    if (senha.length <= 8) {
        alert('A senha deve ter mais de 8 dígitos.');
        return;
    }

    // Salvar dados no localStorage
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.push({ nome, email, telefone, senha });
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    // Redirecionar para a página de funcionários
    window.location.href = 'listarFuncionarios.html';
}


