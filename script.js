const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const body = document.querySelector('body');
const body2 = document.querySelector('.body');
const close = document.querySelector('.close');
const pick = document.querySelectorAll('.picks');
const sscore = document.querySelector('.score');
let text = 'red';
let score = 0;
function showRules() {
    if(body){
        body.classList.add('show');
    }
}

close.addEventListener('click', ()=> {
    body.classList.remove('show')
});

const changeScreen = (el) => {

}
const pics = [
    './images/icon-scissors.svg',
    './images/icon-paper.svg',
    './images/icon-rock.svg'
]

pick.forEach(element => {
    element.addEventListener('click',  (e)=>{
        const elem = e.target.src;
        const id = e.target.id;
        console.log(elem);
        body2.innerHTML = `<div class="step2">
        <div class="yourchoice">
            <img src=${elem} class="chosen" alt="${id}" id="${id}">
            <p>YOU PICKED</p>
        </div>
        <div class="computerchoice">
            <div class="space"></div>
            <p>THE HOUSE PICKED</p>
        </div>
        </div>
        <div class="tre">
            <h1 class="tg">${text}</h1>
            <button class="tre-btn">PLAY AGAIN</button>
        </div>`
        const spa = document.querySelector('.space');
        const num = Math.floor(Math.random()*3);
        // setTimeout(() => {
            spa.innerHTML = `<img src='${pics[num]}' class="chosen2" id="${num}">`
        // }, 2000);
        const click = document.querySelector('.chosen');
        const click2 = document.querySelector('.chosen2');
        const te = document.querySelector('.tg');
        tebtn = document.querySelector('.tre-btn');
        if(click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg'){
            console.log('YOU WIN!');
            te.innerHTML = 'YOU WIN!'
            click.classList.add('win');
            score++;
            sscore.innerHTML = score;
        }else if(click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg'){
            console.log('YOU LOSE!');
            te.innerHTML = 'YOU LOSE!'
            click2.classList.add('lose');
            score--;
            sscore.innerHTML = score;
        }else{
            te.innerHTML = 'DRAW'

        }

        tebtn.addEventListener('click', ()=> {
            body2.innerHTML = ` 
            <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg" class="triangle"><path stroke="#000" stroke-width="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z"/></svg>
            <img src="./images/icon-paper.svg" class="paper picks" alt="paper" id="paper">
            <img src="./images/icon-scissors.svg" alt="Scissors" class="scissors picks" id="scissors">
            <img src="./images/icon-rock.svg" alt="rock" class="rock picks" id ="rock">
        `
        })
    });
});

