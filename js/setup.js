'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURMANES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['rgb(0,0,0)', 'rgb(255,0,0)', '(0,0,255)', 'rgb(255,255,0)', 'rgb(0,128,0)'];

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
