function mostrarSenha(){
    document.getElementById('olho').addEventListener('mousedown', function() {
        document.getElementById('senha').type = 'text';
      });
      
      document.getElementById('olho').addEventListener('mouseup', function() {
        document.getElementById('senha').type = 'password';
      });
      
}

function validarLogin(){
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if(email == 'admin@gmail.com' && senha == 'admin123'){
    alert('Seja bem vindo(a)!')
    location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/index.html';
  }else{
    alert('Usuário ou senha incorreta!')
    document.getElementById('OpcaoHome').onclick = function(){return false};
    location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/Login.html';
                    
}}




