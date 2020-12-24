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
