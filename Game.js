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
//bgImg.addEventListener('load', drawBg, false);

var phoenixImg = new Image();
phoenixImg.src = "img/Phoenix.png";
//phoenixImg.addEventListener('load', drawPhoenix, false);

var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;


var fps = 10;
var drawInterval;
var phoenix;

window.addEventListener('load', onLoad, false);
function onLoad()
{
    ctxBg.drawImage(bgImg, 0, 0);
    phoenix = new Phoenix();
    startDrawing();
    document.addEventListener('keydown', checkKeyDown, false);
    document.addEventListener('keyup', checkKeyUp, false);
}

function checkKeyDown(e) {
    var keyId = e.keycode || e.which;

    if (keyId === 37 || keyId === 65) { // left arrow or A

        phoenix.isLeftKey = true;
        e.preventDefault();
    }

    if (keyId === 38 || keyId === 87) { // up arrow or W
        phoenix.isUpKey = true;
        e.preventDefault();
    }

    if (keyId === 39 || keyId === 68) { // right arrow or D
        phoenix.isRightKey = true;
        e.preventDefault();
    }

    if (keyId === 40 || keyId === 83) { // down arrow or S
        phoenix.isDownKey = true;
        e.preventDefault();
    }
}

function checkKeyUp(e) {
    var keyId = e.keycode || e.which;

    if (keyId === 37 || keyId === 65) { // left arrow or A
        phoenix.isLeftKey = false;
        e.preventDefault();
    }

    if (keyId === 38 || keyId === 87) { // up arrow or W
        phoenix.isUpKey = false;
        e.preventDefault();
    }

    if (keyId === 39 || keyId === 68) { // right arrow or D
        phoenix.isRightKey = false;
        e.preventDefault();
    }

    if (keyId === 40 || keyId === 83) { // down arrow or S
        phoenix.isDownKey = false;
        e.preventDefault();
    }
}

function draw()
{
    phoenix.draw();
    
}

function startDrawing() {
    stopDrawing();
    drawInterval = setInterval(draw, fps);
}

function stopDrawing() {
    clearInterval(drawInterval);
}

function drawBg()
{
    ctxBg.drawImage(bgImg, 0, 0);
}


function drawSquare()
{
    ctxBg.fillStyle = "#505050";
    ctxBg.fillRect(20, 100, 200, 50);

}

function clearCanvas()
{
    ctxBg.clearRect(0, 0, gameWidth, gameHeight);
}

function clearCtxPhoenix() {
    ctxPhoenix.clearRect(0, 0, gameWidth, gameHeight);
}

function Phoenix() {
    
    this.width = 70;
    this.height = 100;
    this.srcX = 0; //(gameWidth - this.width) / 2;
    this.srcY = 0; // gameHeight - this.height - 20;
    this.imgWidth = 550;
    this.imgHeight = 700;
    this.drawX = (gameWidth - this.width) / 2;
    this.drawY = gameHeight - this.height - 20;
    this.isUpKey = false;
    this.isDownKey = false;
    this.isLeftKey = false;
    this.isRightKey = false;

    this.speed = 5;

}

Phoenix.prototype.draw = function () {
    clearCtxPhoenix();
    this.checkKeys();
    ctxPhoenix.drawImage(phoenixImg, this.srcX, this.srcY, this.imgWidth, this.imgHeight, this.drawX, this.drawY, this.width, this.height);
};

Phoenix.prototype.checkKeys = function () {
    if (this.isUpKey) {
        this.drawY -= this.speed;
    }

    if (this.isDownKey) {
        this.drawY += this.speed;
    }

    if (this.isLeftKey) {
        this.drawX -= this.speed;
    }

    if (this.isRightKey) {
        this.drawX += this.speed;
    }
};
