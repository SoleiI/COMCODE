'use strict';

// 1. HTML 요소의 어트리뷰트 활용
function sayHi(name) {
  console.log(`Hi! ${name}`);
}

// 2. DOM 객체의 프로퍼티 활용
const button = document.querySelector('.btn');
button.onclick = () => console.log('button click');
button.onclick = () => console.log('button click 2');


// 3. addEventListener 메서드 활용
button.addEventListener('click', function () {
  console.log('button click[1]');
});

button.addEventListener('click', function () {
  console.log('button click[2]');
});

const mouseOver = () => console.log('mouse over');

button.addEventListener('mouseover', mouseOver);

// removeEventListener
button.removeEventListener('mouseover', mouseOver);


// 이벤트 객체
const msg = document.querySelector('.msg');

const showCoords = (e) => msg.textContent = `x: ${e.clientX}, y: ${e.clientY}`;

document.onclick = showCoords;