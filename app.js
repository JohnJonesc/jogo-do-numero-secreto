let listaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Seja bem-vindo ao JOGO DO NÚMERO SECRETO');
    exibirTextoNaTela('p', 'Para começar: escolha um número de 1 a 10 e insira aqui em baixo');
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa =(` você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`)
        exibirTextoNaTela('h1','voce acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
        else {
            if(chute > numeroSecreto) {
            exibirTextoNaTela('h1','você errou,tente novamente!');
            exibirTextoNaTela('p', `o numero secreto é menor que ${chute}`);

            } 
                else { exibirTextoNaTela('h1','você errou,tente novamente!');
            exibirTextoNaTela('p', `o numero secreto é maior que ${chute} `);

        }
    tentativas++;
    limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumerosSorteados = [];
    } 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { 
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value =  '' ;
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true)

}