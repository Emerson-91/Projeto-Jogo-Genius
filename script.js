let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createcolorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}
//acende a proxima cor
let lightColor = (element, number) => {
    number = number* 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}
//checka se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`pontuação: ${score}\n Voce acertou! iniciando proximo nivel`)
        nextlevel();
    }
}
//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createcolorElement(color).classList.add('selected');
    setTimeout(() => {
        createcolorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
    
}

//criar a funcao que retorna a cor
let createcolorElement= (color) =>{
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//funcao proximo nivel
let nextlevel = () =>{
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`pontuação ${score}\n Voce perdeu o jogo!\n Clique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];
    playGame();
}
//funcao de inicio de jogo
let playGame = () =>{
    alert('Bem vindo ao Genesis!\n iniciando um novo Jogo')
    score = 0;

    nextlevel();
    
}
//evento de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();