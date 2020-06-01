'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var BAR_GAP = 50;
var barWidth = 150;

var getRandomColorHsl = function() {
	var hue = 240;
	var saturation = Math.floor(Math.random() * 100);
	var lightness = 45;
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);


};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y +  GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP , CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP , CLOUD_Y + (GAP * 3) + FONT_GAP );


  var maxTime = getMaxElement(times);



  for (var i = 0; i < players.length; i++) {
    if (players [i]  === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';

   } else { ctx.fillStyle = getRandomColorHsl();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_HEIGHT + BAR_GAP) * i , CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_GAP, BAR_HEIGHT, (-barWidth * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i],CLOUD_X + BAR_GAP + ( BAR_HEIGHT + BAR_GAP) * i,CLOUD_HEIGHT - CLOUD_Y);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_HEIGHT + BAR_GAP) * i , CLOUD_HEIGHT - CLOUD_Y - (barWidth * times[i]) / maxTime - FONT_GAP * 2);

  }
};
