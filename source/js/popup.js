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
