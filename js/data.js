'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURMANES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['rgb(0,0,0)', 'rgb(255,0,0)', '(0,0,255)', 'rgb(255,255,0)', 'rgb(0,128,0)'];
  var FIREBALL_COLORS = ['rgb(238, 72, 48)', 'rgb(48, 168, 238)', 'rgb(92, 230, 192)', 'rgb(232, 72, 213)', 'rgb( 230, 232, 72)'];

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

  window.data = {
    getWizardFireballColor: getWizardFireballColor,
    getWizardName: getWizardName,
    getWizardColorCoat: getWizardColorCoat,
    getWizadEyesColor: getWizadEyesColor
  };

})();
