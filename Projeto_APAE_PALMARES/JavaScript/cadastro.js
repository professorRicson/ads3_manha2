function mostrarSenha(){
    document.getElementById('olho').addEventListener('mousedown', function() {
        document.getElementById('senha').type = 'text';
      });
      
      document.getElementById('olho').addEventListener('mouseup', function() {
        document.getElementById('senha').type = 'password';
      });
      
}

function mostrarSenha2(){
    document.getElementById('olho2').addEventListener('mousedown', function() {
        document.getElementById('senha2').type = 'text';
      });
      
      document.getElementById('olho2').addEventListener('mouseup', function() {
        document.getElementById('senha2').type = 'password';
      });
 
}

function validarCadastro(){
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('senha2').value;

  if(senha == confirmarSenha && email !== '' && senha !== '' && confirmarSenha !== ''){
    location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/index.html';
  }
  else{
    alert('Usuário ou senha incorreta!')
    document.getElementById('entrar').onclick = function(){return false};
    location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/Cadastro.html';
          
  }
};

