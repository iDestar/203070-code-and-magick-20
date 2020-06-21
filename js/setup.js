'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURMANES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['rgb(0,0,0)', 'rgb(255,0,0)', '(0,0,255)', 'rgb(255,255,0)', 'rgb(0,128,0)'];
var FIREBALL_COLORS = ['rgb(238, 72, 48)', 'rgb(48, 168, 238)', 'rgb(92, 230, 192)', 'rgb(232, 72, 213)', 'rgb( 230, 232, 72)'];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var getWizardFireballColor = function () {
  var fireballRandom = Math.floor(Math.random() * FIREBALL_COLORS.length);
  return (FIREBALL_COLORS[fireballRandom]);
};

var getWizardName = function () {
  var nameRandom = Math.floor(Math.random() * WIZARD_NAMES.length);

  return (WIZARD_NAMES[nameRandom]) + ' ' + (WIZARD_SURMANES[nameRandom]);
};

var getWizardColorCoat = function () {
  var coatRandom = Math.floor(Math.random() * WIZARD_COAT_COLORS.length);

  return (WIZARD_COAT_COLORS[coatRandom]);
};

var getWizadEyesColor = function () {
  var eyesRandom = Math.floor(Math.random() * WIZARD_EYES_COLORS.length);

  return (WIZARD_EYES_COLORS[eyesRandom]);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: getWizardName(),
    coatColor: getWizardColorCoat(),
    eyesColor: getWizadEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardColorCoat(),
    eyesColor: getWizadEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardColorCoat(),
    eyesColor: getWizadEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardColorCoat(),
    eyesColor: getWizadEyesColor()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});


var setupWizard = document.querySelector('.setup-wizard');
var setupFireball = document.querySelector('.setup-fireball-wrap');
setupWizard.addEventListener('click', function () {
  document.querySelector('.wizard-coat').style.fill = getWizardColorCoat();
});

setupWizard.addEventListener('click', function () {
  document.querySelector('.wizard-eyes').style.fill = getWizadEyesColor();
});

setupFireball.addEventListener('click', function () {
  document.querySelector('.setup-fireball').style.backgroundColor = getWizardFireballColor();
});
