'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //menu

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

  //scroll

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

  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  // form

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    })
      .done(function () {
        $(this).find('input').val('');

        // $('.modal-wrapper').show('slow').css('display', 'block');
        $('.modal-wrapper').css('display', 'block');
        modal();
        $('form').trigger('reset');
      })
      .fail(function () {
        $('.modal-wrapper-error').css('display', 'block');
      });

    return false;
  });

  function modal() {
    setTimeout(() => {
      $('.modal-wrapper').css('display', 'none');
    }, 3000);
  }

  $('.modal__close').on('click', () => {
    $('.modal-wrapper, .modal-wrapper-error').css('display', 'none');
  });

  // animation

  new WOW().init();
});
