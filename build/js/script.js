'use strict';

(function () {
  const callBackButton = document.querySelector('#callback-button');
  const overlay = document.querySelector('#overlay');
  const popup = document.querySelector('#popup');
  const inputName = popup.querySelector('#callback-name');
  const closePopupBtn = popup.querySelector('#popup__close');

  const showPopup = function () {
    popup.classList.add('appear');

    overlay.style.display = 'block';
    popup.style.display = 'block';
  };

  const hidePopup = function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    callBackButton.addEventListener('click', openPopupHandler);
  };

  const openPopupHandler = function () {
    showPopup();
    inputName.focus();
    overlay.addEventListener('click', overlayPressHandler);
    document.addEventListener('keydown', escPressHandler);
    closePopupBtn.addEventListener('click', closePopupBtnHandler);
    callBackButton.removeEventListener('click', openPopupHandler);
  };

  const closePopupBtnHandler = function () {
    hidePopup();
  };

  const overlayPressHandler = function (evt) {
    if (!evt.target.closest('#popup')) {
      hidePopup();
    }
  }

  const escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      hidePopup();
    }
  };

  callBackButton.addEventListener('click', openPopupHandler);
})();

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

(function () {
  window.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[type="tel"]');

    Array.prototype.forEach.call(inputs, function (input) {
      new InputMask({
        selector: input,
        layout: input.dataset.mask
      })
    })
  })

  function InputMask(options) {
    this.el = this.getElement(options.selector);
    this.layout = options.layout || '+_ (___) ___-__-__';
    this.maskreg = this.getRegexp();

    this.setListeners();
  }

  InputMask.prototype.getRegexp = function () {
    var str = this.layout.replace(/_/g, '\\d')
    str = str.replace(/\(/g, '\\(')
    str = str.replace(/\)/g, '\\)')
    str = str.replace(/\+/g, '\\+')
    str = str.replace(/\s/g, '\\s')

    return str;
  }

  InputMask.prototype.mask = function (e) {
    var _this = e.target,
      matrix = this.layout,
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = _this.value.replace(/\D/g, '');

    if (def.length >= val.length) val = def;

    _this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
    });

    if (e.type == 'blur') {
      var regexp = new RegExp(this.maskreg);
      if (!regexp.test(_this.value)) _this.value = '';
    } else {
      this.setCursorPosition(_this.value.length, _this);
    }
  }

  InputMask.prototype.setCursorPosition = function (pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select()
    }
  }

  InputMask.prototype.setListeners = function () {
    this.el.addEventListener('input', this.mask.bind(this), false);
    this.el.addEventListener('focus', this.mask.bind(this), false);
    this.el.addEventListener('blur', this.mask.bind(this), false);
  }

  InputMask.prototype.getElement = function (selector) {
    if (selector === undefined) return false;
    if (this.isElement(selector)) return selector;
    if (typeof selector == 'string') {
      var el = document.querySelector(selector);
      if (this.isElement(el)) return el;
    }
    return false
  }

  InputMask.prototype.isElement = function (element) {
    return element instanceof Element || element instanceof HTMLDocument;
  }
})();
