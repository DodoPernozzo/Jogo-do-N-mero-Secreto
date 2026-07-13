let listaDeNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
alert ("Bem vindo(a) ao meu primeiro projeto!");
alert ("Projeto criado por Jhonata Duarte no curso de desenvolvimento de sites da Alura");
let nomeJogador = prompt("Antes de tudo, me diga seu nome? (Fique tranquilo, é só para ser usado no jogo)");

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
} 

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Muito bem, ${nomeJogador}! Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosGerados = listaDeNumeros.length;

    if (quantidadeDeNumerosGerados == numeroLimite) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
