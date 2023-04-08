let main = document.querySelector('.main');
let offCanvas = document.querySelector('.offCanvas');
let cross = document.querySelector('.cross');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');

cross.addEventListener('click', crossAnimation);

// line1.addEventListener('mouseover', crossAnimation);
// line2.addEventListener('mouseover', crossAnimation);


function crossAnimation(){
    line1.classList.toggle('line1Cross');
    line2.classList.toggle('line2Cross');

    offCanvas.classList.toggle('moveOffCanvas');
    main.classList.toggle('moveMain');
}