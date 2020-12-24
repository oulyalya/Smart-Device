'use strict';

(function () {
  var blocks = document.querySelectorAll('.accordion-block');

  blocks.forEach(function (block) {
    if (blocks.length > 0) {
      block.classList.add('accordion-block--closed');

      block.addEventListener('click', function () {
        if (block.classList.contains('accordion-block--open')) {
          block.classList.remove('accordion-block--open');
          block.classList.add('accordion-block--closed');
        } else {
          blocks.forEach(function (el) {
            el.classList.remove('accordion-block--open');
            el.classList.add('accordion-block--closed');
          })
          block.classList.add('accordion-block--open');
          block.classList.remove('accordion-block--closed');
        }
      });
    }
  })
})();
