function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container') //pega o elemeento que tem o id='container'
    let cartao = document.createElement('article') //criar o article
    cartao.className = 'cartao' // adiciona uma classe = "cartao"

    //adiona o conteudo que vai ficar no <article class-"cartao"> em HTML
    cartao.innerHTML = ` 
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta} </p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p> ${resposta} </p>
            </div>
        </div>
    `

    let respostaEstaVisivel = false // variavel que representa se resposta esta ou não visivel

    function viraCartao(){ //outra função para virar a carta
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao) // adiciona o cartão 
}
