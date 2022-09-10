const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const body = document.querySelector('body');
const body2 = document.querySelector('.body');
const close = document.querySelector('.close');
const pick = document.querySelectorAll('.picks');

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
        </div>`
        const spa = document.querySelector('.space');
        const num = Math.floor(Math.random()*3);
        // setTimeout(() => {
            spa.innerHTML = `<img src='${pics[num]}' class="chosen2" id="${num}">`
        // }, 2000);
        const click = document.querySelector('.chosen');
        const click2 = document.querySelector('.chosen2');
        if(click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg'){
            console.log('YOU WIN!');
            click.classList.add('win');
        }else if(click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-scissors.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' || click.src== 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-rock.svg' && click2.src == 'file:///C:/Users/User/Desktop/rock-paper-scissors/images/icon-paper.svg'){
            console.log('YOU LOSE!');
            click2.classList.add('lose')
        }
    });
});

