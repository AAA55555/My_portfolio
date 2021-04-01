'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
  let menuItems = document.querySelector('.menu__items');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('hide');
    if (hamburger.classList.contains('visible')) {
      hamburger.classList.remove('visible');
    }
  });

  closeElem.addEventListener('click', () => {
    closeMenu();
  });

  menuItems.addEventListener('click', () => {
    closeMenu();
  });

  function closeMenu() {
    menu.classList.remove('active');
    hamburger.classList.add('visible');
  }

  const counters = document.querySelectorAll('.percent__ratings'),
    lines = document.querySelectorAll('.percent__progress div');

  counters.forEach((val, key) => {
    lines[key].style.width = val.innerHTML;
  });

  window.addEventListener('scroll', () => {
    let scroll = window.scrollY,
      promo = document.querySelector('.promo'),
      promoHeight = getComputedStyle(promo).height.slice(0, 3),
      bgSvg = document.querySelectorAll('.sidepanel__link svg');

    bgSvg.forEach((val) => {
      let coordinatSvg = val.getBoundingClientRect().top + pageYOffset;
      if (coordinatSvg > promoHeight) {
        val.style.fill = '#000';
      }
      if (coordinatSvg < promoHeight) {
        val.style.fill = '#fff';
      }
    });
  });

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');

      $('form').trigger('reset');
    });
    return false;
  });
});
