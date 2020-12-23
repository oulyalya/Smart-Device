'use strict';

(function () {
  var blocks = document.querySelectorAll('.accordion-block');

  blocks.forEach(function (block) {
    block.classList.add('accordion-block--closed');

    block.addEventListener('click', function (evt) {
      block.classList.toggle('accordion-block--closed');
      block.classList.toggle('accordion-block--open');
    });
  })
})();
