const botaoMostrarProjetos = (document.querySelector('.btn-mostrar-projetos'));
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => { 
    projetosinativos.forEach(projeto => {
        projeto.classList.add('ativo');
    });  

    botaoMostrarProjetos.classList.add("remover");

});