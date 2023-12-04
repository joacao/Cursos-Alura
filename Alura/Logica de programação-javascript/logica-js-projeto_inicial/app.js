alert('Boas vindas ao jogo número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let quantidadeDeChutes = 0;

while(chute != numeroSecreto){
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}.Você errou.Tente novamente`);
        }if(chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}.Você errou.Tente novamente`);
        }if(chute == numeroSecreto){
            break;
        }
        chute = prompt('Escolha um número entre 1 e 100');
        quantidadeDeChutes ++;
        
    }

/*if (quantidadeDeChutes == 1 && chute == 5){
         alert(`Isso aí! Você descobriu o número secreto(${numeroSecreto}) de primeira!`);
    }else{
        alert(`Você ganhou e para isso precisou de ${quantidadeDeChutes} tentativas`);
    }*/
let palavraChute = quantidadeDeChutes > 1 ? 'tentativas' : 'tentativa';
alert(`Issso ai! Você descobriu o número secreto(${numeroSecreto}) com ${quantidadeDeChutes} ${palavraChute}`)