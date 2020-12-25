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
    IMask(inputTel, {
      mask: '+{7}(000)000-00-00'
    });
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
