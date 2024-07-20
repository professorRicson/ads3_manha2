document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconeSair');

image.addEventListener('click', () => {
    window.location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/Login.html'; 
});
});

document.addEventListener('DOMContentLoaded', (event) => {
const image = document.getElementById('iconeVoltar');

image.addEventListener('click', () => {
    window.location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/ListaPacientes.html';
 
});
});


document.getElementById('iconeInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '20%'; // Limitar o tamanho da imagem para 500px de largura
            img.style.height = '20%';    // Manter a proporção da imagem
            img.style.marginTop = '12%';
            img.style.marginLeft = '13%';

            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = ''; // Limpar qualquer imagem existente
            imageContainer.appendChild(img);
        }
        
        reader.readAsDataURL(file);
    }
});

function adicionar() {
    // Obter os valores dos inputs
    const usuario = document.getElementById('Usuario').value;
    const cid = document.getElementById('CID').value;
    const data = document.getElementById('Date').value;
    const responsavel = document.getElementById('Responsavel').value;
    const telefone = document.getElementById('Telefone').value;
    const vinculo1 = document.getElementById('opcao1').value;
    const vinculo11 = document.getElementById('opcao11').value;
    const vinculo111 = document.getElementById('opcao111').value;

    // Verificar se todos os campos estão preenchidos
    if (!usuario || !cid || !data || !responsavel || !telefone || !vinculo1 || !vinculo11 || !vinculo111) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar uma nova linha na tabela
    const tabela = document.createDocumentFragment('contatosTable');
    const novaLinha = tabela.insertRow();

    // Adicionar células na nova linha
    const celulaUsuario = novaLinha.insertCell(0);
    const celulaCid = novaLinha.insertCell(1);
    const celulaDate = novaLinha.insertCell(2);
    const celulaResponsavel = novaLinha.insertCell(3);
    const celulaTelefone = novaLinha.insertCell(4);
    const celulaVinculo1 = novaLinha.insertCell(5);
    const celulaVinculo11 = novaLinha.insertCell(6);
    const celulaVinculo111 = novaLinha.insertCell(7);

    // Definir o conteúdo das células
    celulaUsuario.textContent = usuario;
    celulaCid.textContent = cid;
    celulaDate.textContent = data;
    celulaResponsavel.textContent = responsavel;
    celulaTelefone.textContent = telefone;
    celulaVinculo1.textContent = vinculo1;
    celulaVinculo11.textContent = vinculo11;
    celulaVinculo111.textContent = vinculo111;


    // Limpar os inputs após adicionar o contato
    document.getElementById('Usuario').value = '';
    document.getElementById('CID').value = '';
    document.getElementById('Date').value = '';
    document.getElementById('Responsavel').value = '';
    document.getElementById('Telefone').value = '';
    document.getElementById('opcao1').value = '';
    document.getElementById('opcao11').value = '';
    document.getElementById('opcao111').value = '';

    const usuario1 = document.querySelector("Usuario").value;
    localStorage.setItem("contatosTable", usuario1);

    const cid1 = document.querySelector("CID").value;
    localStorage.setItem("contatosTable", cid1);

    const data1 = document.querySelector("Date").value;
    localStorage.setItem("contatosTable", data1);

    const responsavel1 = document.querySelector("Responsavel").value;
    localStorage.setItem("contatosTable", responsavel1);

    const telefone1 = document.querySelector("Telefone").value;
    localStorage.setItem("contatosTable", telefone1);

    const vinculo = document.querySelector("opcao1").value;
    localStorage.setItem("contatosTable", vinculo);

    const vinculo2 = document.querySelector("opcao11").value;
    localStorage.setItem("contatosTable", vinculo2);

    const vinculo3 = document.querySelector("opcao111").value;
    localStorage.setItem("contatosTable", vinculo3);

}


















