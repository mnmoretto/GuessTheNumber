function verificaChute (chute) {
    const numero = +chute
    
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Inválido. Diga um número.</div>'
    }

    if (numeroLimite(numero)){
        elementoChute.innerHTML += `<div> Valor inválido: O número deve estar entre ${menor} e ${maior}</div>`
    }

    if (numero === numeroSecreto) {   //NÚMERO VÁLIDO

        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto éra ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>Você disse: </div>
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>Você disse: </div>
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroLimite(numero) {
    return numero > maior || numero < menor

}

document.body.addEventListener('click', e=> {

    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})

