function mostrarSenha() {
  const olho = document.getElementById('olho');
  const senha = document.getElementById('senha');
  
  olho.addEventListener('mousedown', () => senha.type = 'text');
  olho.addEventListener('mouseup', () => senha.type = 'password');
}

function validarLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === 'admin@gmail.com' && senha === 'admin123') {
      alert('Seja bem-vindo(a)!');
      location.href = 'index.html';
  } else {
      alert('Usuário ou senha incorreta!');
      // Remover event listener no elemento específico não é necessário se o redirecionamento já está sendo feito
      location.href = 'Login.html';
  }
}