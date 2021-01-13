class perguntas {
    constructor(vida, erros) {
        this.vida = 5
        this.vida = vida
        this.erros = erros
    }



// let Perguntas = new perguntas()

    apagarNumeros() {
        if(perguntas.pergunta != 0){
            perguntas.pergunta == 0
        }
    }

    selecionarPerguntas(numero) {
        let retorno

        if(numero == 1){
            retorno = 'Quando Harry potter nasceu ?'
        }
        else if(numero == 2){
            retorno = 'Qual horcrux foi a segunda a ser destruída?'
        }
        else if(numero == 3){
            retorno = 'Em que andar fica o corredor proibido ?'
        }
        else if(numero == 4){
            retorno = 'Qual é o patrono de luna lovegood ?'
        }
        else if(numero == 5){
            retorno = 'Quem não é membro da ordem da fênix ?'
        }
        
        let Perguntas = new perguntas(5,0)

        console.log(Perguntas)
        
        return retorno
    }

    selecionarRespostaCerta(numero) {
        let retorno

        if(numero == 1){
            retorno = '31 de julho 1980'
        }
        else if(numero == 2){
            retorno = 'O anel'
        }
        else if(numero == 3){
            retorno = '3 andar'
        }
        else if(numero == 4){
            retorno = 'Uma lebre'
        }
        else if(numero == 5){
            retorno = 'Professor snape'
        }
        
        return retorno
    }

    selecionarRespostaErrada(numero) {
        
        let retorno

        if(numero == 1){
            retorno = '31 de agosto 1980'
        }
        else if(numero == 2){
            retorno = 'O medalhão'
        }
        else if( numero == 3){
            retorno = '4 andar'
        }
        else if( numero == 4){
            retorno = 'Um gato'
        }
        else if( numero == 5){
            retorno = 'Remos lupin'
        }

        return retorno

    }

    esquerdoDireito(){
        let x = this.numeroAleatorio2() + 1 

        return x
    }

    numeroAleatorio(){
        let numero = Math.floor(Math.random() * 5) + 1

        return numero
    }

    numeroAleatorio2(){
        let numero = Math.floor(Math.random() * 50) + 1

        return numero
    }


// document.getElementById('teste').innerHTML = numeroAleatorio()

}

class Bd {

    constructor(){

    }

}

let Perguntass = new perguntas()

// function tirarVida(){

//     let x = parseInt(Perguntass.vida)
//     let y = parseInt(Perguntass.erros)

//     let vida = x - 1
    
//     let erros = y + 1

//     let Perguntas = new perguntas(vida,erros)

//     console.log(Perguntas)
// }



function testarEsquerda(){

    if(document.getElementById('inputEsquerdo').value == 'certa'){
        console.log('acertouuuuu')
        window.location.href = "certa.html" 
    }
    else {
        window.location.href = "errada.html" 
    }
}

function testarDireito(){

    if(document.getElementById('inputDireito').value == 'certa'){
        window.location.href = "certa.html" 
    }
    else {
        window.location.href = "errada.html" 
    }
}