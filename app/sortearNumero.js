const menor = 1;
const maior = 100;
const numeroSecreto = numAleatorio()

function numAleatorio() {
    return parseInt(Math.random() * maior + 1); 
}

console.log(numeroSecreto)

//console.log('= ',numAleatorio);

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maior;
const elementMenorValor = document.getElementById('menor-valor');
elementMenorValor.innerHTML = menor;


