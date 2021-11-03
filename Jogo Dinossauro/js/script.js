const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;
let isjump = false;

function handKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isjump) {
            jump();
        }
    }
}

function jump() {
    isjump = true;

    let upInterval = setInterval(() =>{
        if(position >= 150) {
            clearInterval(upInterval);
            isjump = false;

            //descendo
            let downInterval = setInterval(() =>{
                if(position <= 0) {
                    clearInterval(downInterval)
                } else {
                    position -= 20;
                dino.style.bottom = position + 'px'
                }
            }, 20)
        } else {
        //subindo
        position += 20
        dino.style.bottom = position + 'px';
        }
    }, 20)
}

function creatCactos() {
    const cactos = document.createElement('div');
    let cactosPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    background.appendChild(cactos)

    let leftInterval = setInterval(() =>{
        if(cactosPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactos);
        } else if (cactosPosition > 0 && cactosPosition < 60 && position < 60){
            //gameOver
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactosPosition -= 10;
            cactos.style.left = cactosPosition + 'px';
        }
    }, 20)

    setTimeout(creatCactos, randomTime);
}

creatCactos();
document.addEventListener('keyup', handKeyUp);