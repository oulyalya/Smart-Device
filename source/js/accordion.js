'use strict';

(function () {
  const blocks = document.querySelectorAll('.accordion-block');

  blocks.forEach(function (block) {
    block.classList.add('accordion-block--closed');

    block.addEventListener('click', function () {
      block.classList.toggle('accordion-block--closed');
      block.classList.toggle('accordion-block--open');
    })
  })
})();
