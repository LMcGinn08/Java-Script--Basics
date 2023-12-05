document.querySelector('form').addEventListener('submit', checkGrade);

const A=90;
const B=80;
const C=70;
const D=60;
const F=59;

function checkGrade(e) {
e.preventDefault();

    let myGrade = document.querySelector('input').value;

    let message = `<ul>`;
    
    console.log('RUNNIN THE CALCS!!!!');

    if (myGrade >= 90){
    message += `<li>You have an A! Good Job</li>`;
    }

    if (myGrade >= 80 && myGrade <= 89){
        message += `<li>You have a B</li>`;
    }

    if (myGrade >= 70 && myGrade <= 79) {
        message += `<li>You have a C</li>`;
    }

    if (myGrade >= 60 && myGrade <= 69) {
        message +=  `<li>You have a D</li>`;
    }

    if (myGrade <= 59) {
        message += `<li>You have an F. You are not passing.</li>`
    
    }
    message += `</ul>`
document.querySelector('#output').innerHTML = message;
}