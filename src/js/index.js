/*
    OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

    - passo 1 - Dar um jeito de pegar o elemento HTML dos botões.

    - passo 2 - Dar um jeito de identificar o clique do usuário no botão.

    - passo 3 - Desmarcar o botão selecionado anterior.

    - passo 4 - Marcar o botão clicado como se estivesse selecionada.

    - passo 5 - Esconder a imagem anterior.

    - passo 6 - Fazer aparecer a imagem correspondente ao botão clicado.
*/

// passo 1 - Dar um jeito de pegar o elemento HTML dos botões.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - Dar um jeito de identificar o clique do usuário no botão.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3 - Desmarcar o botão selecionado anterior.
        /*const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');*/
        esconderImagemAtiva(); 

        //passo 4 - Marcar o botão clicado como se estivesse selecionada.
        /*botao.classList.add('selecionado');*/
        selecionarBotaoCarrossel(botao);

        //passo 5 - Esconder a imagem anterior.
        /*const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');*/
        desativarBotaoSelecionado();

        //passo 6 - Fazer aparecer a imagem correspondente ao botão clicado.
        /*console.log(imagens);
        imagens[indice].classList.add('ativa');*/
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function esconderImagemAtiva() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

