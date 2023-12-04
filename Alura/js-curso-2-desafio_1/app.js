let textoH1 = document.querySelector('h1');
textoH1.innerHTML = 'Hora do Desafio'; 
let cidade = 'Osasco'


function cliqueConsole(){
    console.log('O botão CONSOLE foi clicado')
}

function cliqueAlerta(){
    alert('Eu amo JS')
}

function cliquePrompt(){
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function cliqueSoma(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}