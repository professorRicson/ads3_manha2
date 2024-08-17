document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        { id: 'iconeSair', href: 'Login.html' },
        { id: 'iconeVoltar', href: 'index.html' },
        { id: 'iconeVoltar2', href: 'CadastrarFuncionario.html' },
        { id: 'iconelataLixo', href: 'CadastrarFuncionario.html' },
        { id: 'iconelataLixo2', href: 'CadastrarFuncionario.html' },
        { id: 'iconelataLixo3', href: 'CadastrarFuncionario.html' }
    ];

    elements.forEach(({ id, href }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => {
                window.location.href = href;
            });
        }
    });
});

function remover(){
    const item = document.querySelector("div");
    const container = item.parentNode;
    container.removeChild(item);

}

// Função para carregar a lista de pacientes do localStorage e adicionar à página
function carregarPacientes() {
    const pacientes = JSON.parse(localStorage.getItem('contatos')) || [];
    const listaPacientesContainer = document.getElementById('listaPacientesContainer');

    listaPacientesContainer.innerHTML = ''; // Limpar o contêiner antes de adicionar novos pacientes

    pacientes.forEach(paciente => {
        const pacienteDiv = document.createElement('div');
        pacienteDiv.classList.add('paciente');

        const pacienteNome = document.createElement('p');
        pacienteNome.textContent = paciente.usuario; // Ajuste se necessário

        const iconeAltera = document.createElement('img');
        iconeAltera.src = 'Imagens/altera.png';
        iconeAltera.id = 'iconelataLixo'; // Adicionar estilos se necessário
        
        const iconeLixo = document.createElement('img');
        iconeLixo.src = 'Imagens/cone-de-lata-de-lixo-plana.webp';
        iconeLixo.classList.add('apagar'); // Adicionar estilos se necessário
        
        pacienteDiv.appendChild(iconeAltera);
        pacienteDiv.appendChild(iconeLixo);
        pacienteDiv.appendChild(pacienteNome);

        listaPacientesContainer.appendChild(pacienteDiv);
    });
}

// Carregar pacientes quando a página é carregada
window.onload = function() {
    carregarPacientes();
};

