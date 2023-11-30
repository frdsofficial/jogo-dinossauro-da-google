const dino = document.querySelector('.dino');
let isJumping = false;
const background = document.querySelector('.background');
let position = 0;

//console.log("o valor de dino é" + dino);

function handleKeyUp(event){
    if(event.keyCode === 32){//se for a tecla espaço
        if(!isJumping){
        jump();
       }
    }

}

function jump(){
    isJumping = true;
    let upInterval = setInterval(() => {

        if(position >= 150){
            clearInterval(upInterval);


            //faz o dino descer
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else{
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}


//cactos

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval( () => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }  else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {

            //gameOver

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo!</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);//fica de olho se alugma tecla é precionada
