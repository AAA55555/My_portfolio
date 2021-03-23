'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('hide');
    if(hamburger.classList.contains('visible')) {
      hamburger.classList.remove('visible');
    }
  });

  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.add('visible');
  });

  const counters = document.querySelectorAll('.percent__ratings'),
  lines = document.querySelectorAll('.percent__progress div');

  counters.forEach((val, key) => {
    lines[key].style.width = val.innerHTML;
  });
});
