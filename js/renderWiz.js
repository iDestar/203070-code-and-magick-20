
'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

  var wizards = [
    {
      name: window.data.getWizardName(),
      coatColor: window.data.getWizardColorCoat(),
      eyesColor: window.data.getWizadEyesColor()
    },
    {
      name: window.data.getWizardName(),
      coatColor: window.data.getWizardColorCoat(),
      eyesColor: window.data.getWizadEyesColor()
    },
    {
      name: window.data.getWizardName(),
      coatColor: window.data.getWizardColorCoat(),
      eyesColor: window.data.getWizadEyesColor()
    },
    {
      name: window.data.getWizardName(),
      coatColor: window.data.getWizardColorCoat(),
      eyesColor: window.data.getWizadEyesColor()
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

})();
