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
