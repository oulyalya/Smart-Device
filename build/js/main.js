'use strict';

(function () {
  var blocks = document.querySelectorAll('.accordion-block');

  var removeActiveBlock = function () {
    blocks.forEach(function (el) {
      el.classList.remove('accordion-block--open');
      el.classList.add('accordion-block--closed');
    });
  };

  blocks.forEach(function (block) {
    if (blocks.length > 0) {
      block.classList.add('accordion-block--closed');

      block.addEventListener('click', function () {
        if (block.classList.contains('accordion-block--open')) {
          block.classList.remove('accordion-block--open');
          block.classList.add('accordion-block--closed');
        } else {
          removeActiveBlock();
          block.classList.add('accordion-block--open');
          block.classList.remove('accordion-block--closed');
        }
      });
    }
  });
})();

'use strict';

(function () {
  var inputName = document.querySelector('.feedback__name');
  var inputTel = document.querySelector('.feedback__tel');
  var submitBtn = document.querySelector('.feedback__submit');

  var isStorageName = true;
  var isStorageTel = true;

  var storedName = '';
  var storedTel = '';


  // Валидация для телефона
  if (inputTel) {
    IMask(inputTel, { mask: '+{7}(000)000-00-00' });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      var username = inputName.value;
      var tel = inputTel.value;

      if (username && tel) {
        localStorage.setItem('name', username.trim());
        localStorage.setItem('telephone', tel.trim());
      }
    });
  }

  if (inputName) {
    inputName.addEventListener('focus', function () {
      try {
        storedName = localStorage.getItem('name');
      } catch (err) {
        isStorageName = false;
      }

      if (storedName) {
        inputName.value = localStorage.getItem('name');
      } else if (!isStorageName) {
        inputName.focus();
      }
    });
  }

  if (inputTel) {
    inputTel.addEventListener('focus', function () {
      try {
        storedTel = localStorage.getItem('telephone');
      } catch (err) {
        isStorageTel = false;
      }

      if (storedTel) {
        inputTel.value = localStorage.getItem('telephone');
      } else if (!isStorageTel) {
        inputTel.focus();
      }
    });
  }
})();

'use strict';

(function () {
  var callBackButton = document.querySelector('.callback-btn');
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');
  var inputName = document.querySelector('.popup__name');
  var inputTel = document.querySelector('.popup__tel');
  var inputTextarea = document.querySelector('.popup__textarea');
  var closePopupBtn = document.querySelector('.popup__button-close');
  var submitPopupBtn = document.querySelector('.popup__submit');

  var isStorageName = true;
  var isStorageTel = true;

  var storedName = '';
  var storedTel = '';

  var body = document.querySelector('body');

  var showPopup = function () {
    overlay.classList.add('js-display-block');
    popup.classList.add('js-display-block');
    body.classList.add('js-overflow-hidden');
  };

  var hidePopup = function () {
    overlay.classList.remove('js-display-block');
    popup.classList.remove('js-display-block');
    callBackButton.addEventListener('click', openPopupHandler);
    submitPopupBtn.removeEventListener('click', submitPopupBtnHandler);
    body.classList.remove('js-overflow-hidden');
  };

  var openPopupHandler = function () {
    showPopup();
    if (popup) {
      inputName.focus();
      overlay.addEventListener('click', overlayPressHandler);
      document.addEventListener('keydown', escPressHandler);
      closePopupBtn.addEventListener('click', closePopupBtnHandler);
      callBackButton.removeEventListener('click', openPopupHandler);
      submitPopupBtn.addEventListener('click', submitPopupBtnHandler);
    }
  };

  var closePopupBtnHandler = function () {
    if (popup) {
      hidePopup();
    }
  };

  var submitPopupBtnHandler = function (evt) {
    if (popup) {
      if (inputName.value && inputTel.value && inputTextarea.value) {
        evt.preventDefault();
      }
    }
  };

  var overlayPressHandler = function (evt) {
    if (!evt.target.closest('#popup')) {
      hidePopup();
    }
  };

  var escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      hidePopup();
    }
  };

  if (callBackButton) {
    callBackButton.addEventListener('click', openPopupHandler);
  }

  if (popup) {
    if (inputTel) {
      IMask(inputTel, { mask: '+{7}(000)000-00-00' });
    }

    submitPopupBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      var username = inputName.value;
      var tel = inputTel.value;

      if (username && tel) {

        localStorage.setItem('name', username);
        localStorage.setItem('telephone', tel);
      }
    });
  }

  if (inputName) {
    inputName.addEventListener('focus', function () {
      try {
        storedName = localStorage.getItem('name');
      } catch (err) {
        isStorageName = false;
      }

      if (storedName) {
        inputName.value = localStorage.getItem('name');
      } else if (!isStorageName) {
        inputName.focus();
      }
    });
  }

  if (inputTel) {
    inputTel.addEventListener('focus', function () {
      try {
        storedTel = localStorage.getItem('telephone');
      } catch (err) {
        isStorageTel = false;
      }

      if (storedTel) {
        inputTel.value = localStorage.getItem('telephone');
      } else if (!isStorageTel) {
        inputTel.focus();
      }
    });
  }
})();
