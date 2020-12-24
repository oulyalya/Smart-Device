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

'use strict';

(function () {
  var form = document.querySelector('form');
  var inputName = form.querySelector('.feedback__name');
  var inputTel = form.querySelector('.feedback__tel');
  var textarea = form.querySelector('.feedback__textarea');
  var submitBtn = form.querySelector('.feedback__submit');

  var isStorageName = true;
  var isStorageTel = true;

  var storedName = '';
  var storedTel = '';

  submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    var username = inputName.value;
    var tel = inputTel.value;

    if (username && tel && isStorageSupport) {
      localStorage.setItem('name', username.trim());
      localStorage.setItem('telephone', tel.trim());
    }
  });

  inputName.addEventListener('focus', function () {
    try {
      storedName = localStorage.getItem('name');
    } catch (err) {
      isStorageName = false;
    }

    if (storedName) {
      inputName.value = localStorage.getItem('name');
      inputTel.focus();
    } else if (!isStorageName) {
      inputName.focus();
    }
  });

  inputTel.addEventListener('focus', function () {
    try {
      storedTel = localStorage.getItem('telephone');
    } catch (err) {
      isStorageTel = false;
    }

    if (storedTel) {
      inputTel.value = localStorage.getItem('telephone');
      textarea.focus();
    } else if (!isStorageTel) {
      inputTel.focus();
    }
  });
})();

'use strict';

(function () {
  var callBackButton = document.querySelector('.callback-btn');
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');
  var form = document.querySelector('.popup__form');
  var inputName = form.querySelector('.popup__name');
  var inputTel = form.querySelector('.popup__tel');
  var inputTextarea = form.querySelector('.popup__textarea');
  var closePopupBtn = popup.querySelector('.popup__button-close');
  var submitPopupBtn = popup.querySelector('.popup__submit');

  var isStorageName = true;
  var isStorageTel = true;

  var storedName = '';
  var storedTel = '';

  var body = document.querySelector('body');
  var lockPaddingValue = window.innerWidth - document.querySelector('.container');


  var showPopup = function () {
    popup.classList.add('appear');

    overlay.style.display = 'block';
    popup.style.display = 'block';
    body.style.overflow = 'hidden';
    document.querySelector('.container').style.marginRight = lockPaddingValue + 'px';
  };

  var hidePopup = function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    callBackButton.addEventListener('click', openPopupHandler);
    submitPopupBtn.removeEventListener('click', submitPopupBtnHandler);
    body.style.overflowY = 'visible';
    document.querySelector('.container').style.marginRight = 'auto';
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
    hidePopup();
  };

  var submitPopupBtnHandler = function (evt) {
    if (inputName.value && inputTel.value && inputTextarea.value) {
      evt.preventDefault();
    }
  }

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

  callBackButton.addEventListener('click', openPopupHandler);

  submitPopupBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    var username = inputName.value;
    var tel = inputTel.value;

    if (username && tel) {

      localStorage.setItem('name', username);
      localStorage.setItem('telephone', tel);
    }
  });

  inputName.addEventListener('focus', function () {
    try {
      storedName = localStorage.getItem('name');
    } catch (err) {
      isStorageName = false;
    }

    if (storedName) {
      inputName.value = localStorage.getItem('name');
      inputTel.focus();
    } else if (!isStorageName) {
      inputName.focus();
    }
  });

  inputTel.addEventListener('focus', function () {
    try {
      storedTel = localStorage.getItem('telephone');
    } catch (err) {
      isStorageTel = false;
    }

    if (storedTel) {
      inputTel.value = localStorage.getItem('telephone');
      inputTextarea.focus();
    } else if (!isStorageTel) {
      inputTel.focus();
    }
  });
})();
