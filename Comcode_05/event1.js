'use strict';

const eventType = document.querySelector('.event');
const textbox = document.querySelector('.txtbox');

document.addEventListener('click', () => {
  eventType.innerHTML += '<p>click</p>'
});

document.addEventListener('mousedown', () => {
  eventType.innerHTML += '<p>mouse down</p>'
});

document.addEventListener('mouseup', () => {
  eventType.innerHTML += '<p>mouse up</p>'
});

textbox.addEventListener('focus', () => {
  eventType.innerHTML += '<p>focus</p>'
});

textbox.addEventListener('blur', () => {
  eventType.innerHTML += '<p>blur</p>'
});

window.addEventListener('load', () => {
  eventType.innerHTML += '<p>load</p>'
});