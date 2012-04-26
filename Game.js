var canvasBg = document.getElementById('canvasBg');

var ctxBg = canvasBg.getContext('2d');

var canvasPhoenix = document.getElementById('canvasPhoenix');

var ctxPhoenix = canvasPhoenix.getContext('2d');

var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtn.addEventListener('click', clearCanvas, false);

var drawSquareBtn = document.getElementById('drawSquareBtn');
drawSquareBtn.addEventListener('click', drawSquare, false);

var bgImg = new Image();
bgImg.src = "img/bg.png";
bgImg.addEventListener('load', drawBg, false);

var phoenixImg = new Image();
phoenixImg.src = "img/Phoenix.png";
phoenixImg.addEventListener('load', drawPhoenix, false);

var gameWidth = 1500;
var gameHeight = 1080;

function drawBg()
{
	ctxBg.drawImage(bgImg, 0, 0);
}

function drawPhoenix()
{
	ctxBg.drawImage(phoenixImg, (gameWidth - 70)/2, gameHeight - 100 - 30, 70, 100);
}

function drawSquare()
{
	
	ctxBg.fillStyle = "#505050";
	ctxBg.fillRect(20, 100, 200, 50);

}

function clearCanvas()
{

	ctxBg.clearRect(100, 120, 20, 20);
}
