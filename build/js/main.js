'use strict';

(function () {
  var blocks = document.querySelectorAll('.accordion-block');

  blocks.forEach(function (block) {
    block.classList.add('accordion-block--closed');

    block.addEventListener('click', function (evt) {
      block.classList.toggle('accordion-block--closed');
      block.classList.toggle('accordion-block--open');
      if (block.classList.contains('accordion-block--open') && !evt.target(block))
        block.style.border = '5px solid red'
    });
  });
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


  // var noScrollHandler = function (evt) {

  //   // window.addEventListener('scroll', (e) => {
  //   // window.addEventListener('scroll', noScrollHandler)

  //   evt.preventDefault();
  //   window.scrollTo(0, 0);
  //   // });
  // };

  var showPopup = function () {
    popup.classList.add('appear');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    // window.addEventListener('scroll', noScrollHandler);
  };

  var hidePopup = function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    callBackButton.addEventListener('click', openPopupHandler);
    submitPopupBtn.removeEventListener('click', submitPopupBtnHandler);

    // window.removeEventListener('scroll', noScrollHandler);
  };

  var openPopupHandler = function () {
    showPopup();
    inputName.focus();
    overlay.addEventListener('click', overlayPressHandler);
    document.addEventListener('keydown', escPressHandler);
    closePopupBtn.addEventListener('click', closePopupBtnHandler);
    callBackButton.removeEventListener('click', openPopupHandler);
    submitPopupBtn.addEventListener('click', submitPopupBtnHandler);
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
