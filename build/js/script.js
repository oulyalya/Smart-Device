'use strict';

(function () {
  var menu = document.querySelector('.main-nav');
  var menuBtn = menu.querySelector('.main-nav__toggle');

  var hideMenu = function () {
    if (menu && menu.classList.contains('main-nav--no-js')) {
      menu.classList.add('main-nav--closed');
      menu.classList.remove('main-nav--open');
      menu.classList.remove('main-nav--no-js');
    }
  };

  var toggleMenu = function () {
    menu.classList.toggle('main-nav--closed');
    menu.classList.toggle('main-nav--open');
  };

  hideMenu();
  menuBtn.addEventListener('click', toggleMenu);
})();
