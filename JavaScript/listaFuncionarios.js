function mostrarSenha() {
    const olho = document.getElementById('olho');
    const senha = document.getElementById('senha');
    
    olho.addEventListener('mousedown', () => senha.type = 'text');
    olho.addEventListener('mouseup', () => senha.type = 'password');
  }
  