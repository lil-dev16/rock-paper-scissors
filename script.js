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
        setTimeout(() => {
            spa.innerHTML = `<img src='${elem}' class="chosen" id="${id}">`
        }, 2000);
    });
});

