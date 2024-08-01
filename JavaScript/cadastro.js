function toggleSenha(idOlho, idSenha) {
  const olho = document.getElementById(idOlho);
  const senha = document.getElementById(idSenha);

  olho.addEventListener('mousedown', () => {
      senha.type = 'text';
  });

  olho.addEventListener('mouseup', () => {
      senha.type = 'password';
  });

  olho.addEventListener('mouseleave', () => {
      senha.type = 'password'; // Garante que a senha volte a ser oculta se o mouse sair da área do ícone
  });
}

// Use a função para ambos os casos
toggleSenha('olho', 'senha');
toggleSenha('olho2', 'senha2');


function validarCadastro() {
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('senha2').value;

  // Verifica se todos os campos estão preenchidos
  if (email === '' || senha === '' || confirmarSenha === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verifica se a senha tem mais de 8 caracteres
  if (senha.length <= 8) {
    alert('A senha deve ter mais de 8 caracteres.');
    return;
  }

  // Verifica se a senha e a confirmação de senha coincidem
  if (senha !== confirmarSenha) {
    alert('A senha e a confirmação de senha não coincidem.');
    return;
  }

  // Se todas as validações passarem, redireciona para a página principal
  location.href = 'index.html';
}


