'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var setupWizard = document.querySelector('.setup-wizard');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  setupWizard.addEventListener('click', function () {
    document.querySelector('.wizard-coat').style.fill = window.data.getWizardColorCoat();
  });

  setupWizard.addEventListener('click', function () {
    document.querySelector('.wizard-eyes').style.fill = window.data.getWizadEyesColor();
  });

  setupFireball.addEventListener('click', function () {
    document.querySelector('.setup-fireball').style.backgroundColor = window.data.getWizardFireballColor();
  });

})();
