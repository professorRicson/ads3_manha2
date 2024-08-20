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

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!nome || !email || !telefone || !senha) {
      alert('Todos os campos devem ser preenchidos!');
      return;
  }

  // Validar formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('O e-mail deve ser válido!');
      return;
  }

  // Validar formato do telefone
  const telefoneRegex = /^\d{10,15}$/; // Exemplo de formato para números de telefone
  if (!telefoneRegex.test(telefone)) {
      alert('O telefone deve conter entre 10 e 15 dígitos!');
      return;
  }
  // Se todas as validações passarem, redireciona para a página principal
  location.href = 'index.html';
}

  