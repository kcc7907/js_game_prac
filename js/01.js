//  game1
// let character = document.querySelector('#character');
// let block = document.querySelector('#block');

// let jump = e => {
//     if (character.classList != 'animate') {
//         character.classList.add('animate');
//     }
//     setTimeout(e => {
//         character.classList.remove('animate');
//     }, 500);
// }

// var checkDead = setInterval(() => {
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
//     if (blockLeft < 20 && blockLeft > 0 &&
//         characterTop >= 130) {
//         block.style.animation = 'none';
//         block.style.display = 'none';
//         alert('u lose.');
//     }
// }, 10);

//game 2

let colors = ['blue', 'red', 'green', 'yellow']
let checkmark = document.querySelector('#checkmark')
let wrong = document.querySelector('#wrong')
let correct = document.querySelector('#correct')
let correctInt = 0;

function checkColor(color, correctAnswer) {
    if (color === correctAnswer) {
        correctInt++;
        checkmark.classList.add('fadeAway');
    } else {
        wrong.classList.add('fadeAway')
    }
    setTimeout(() => {
        checkmark.classList.remove('fadeAway');
        wrong.classList.remove('fadeAway')
    }, 500);
    reset();
    correct.innerHTML = correctInt;
}

function reset() {
    let random1 = Math.floor(Math.random() * 2);
    if (random1 === 0) {
        let color1 = document.querySelector('#color1');
        let color2 = document.querySelector('#color2');
    } else {
        let color2 = document.querySelector('#color1');
        let color1 = document.querySelector('#color2');
    }
    document.querySelector('#start').style.display = 'none';
    let random = Math.floor(Math.random() * 4);
    let correctAnswer = colors[random];
    color1.innerHTML = correctAnswer;

}