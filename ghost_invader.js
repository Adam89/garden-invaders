var canvasBg = document.getElementById("canvasBg");
var ctxBg = canvasBg.getContext("2d"); //The canvas is drawn on top of this.
var canvasEntities = document.getElementById("canvasEntities");
var ctxEntities = canvasEntities.getContext("2d");
var canvasWidth = canvasBg.width;
var canvasHeigth = canvasBg.height;
var player1 = new Player();
//var enemies = [];
//var numEnemies = 5;
//var obstacles = [];
var isPlaying = false;

//Shim set to one of these things based on what's available
var requestAnimationFrame = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
function(callback) {
  window.setTimeOut(callback, 1000/60)
}

var imgSprite =  new Image();
imgSprite.src = "images/sprite.png";
imgSprite.addEventListener("load", init, false);

function init() {
  //document.addEventListener("keydown", checkKeyDown, false)
  //document.addEventListener("keyup", checkKeyUp, false)
  //defineObstacles();
  //initEnemies();
  begin();
}

function begin() {
  ctxBg.drawImage(imgSprite, 0, 0, canvasWidth, canvasHeigth, 0, 0, canvasWidth, canvasHeigth);
  isPlaying = true;
  requestAnimationFrame(loop);
}


function update() {
  clearCtx(ctxEntities);
  //updateAllEnemies
  player1.update();
}


function draw() {
  //drawAllEnemies()
  player1.draw()
}

function loop() {
  if(isPlaying) {
    update();
    draw();
    requestAnimationFrame(loop);
  }
}

function clearCtx(ctx) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeigth);
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function Player() {
  this.srcX = 0;
  this.srcY = 600;
  this.width = 35;
  this.height = 54;
  this.drawX = 400;
  this.drawY = 300;
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.heigth / 2);
  this.speed = 2;
 // this.isUpKey = false;
 // this.isDownKey = false;
 // this.isRightKey = false;
 // this.isLeftKey = false;
 // this.isSpaceBar = false;
 // this.isShooting = false;
 // var numBullets = 10;
 // this.bullets = [];
 // this.currentBullet = 0;

 // for(var i = 0; i < numBullets; i++) {
 //   this.bullets[this.bullets.length] = new Bullet();
 // }
}


Player.prototype.update = function() {
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.heigth / 2);
  //this.checkDirection();
  //this.checkShooting();
  //this.updateAllBullets();
};


Player.prototype.draw = function() {
  //this.drawAllBullets();
  ctxEntities.drawImage(
      imgSprite,
      this.srcX,
      this.srcY,
      this.width,
      this.height,
      this.drawX,
      this.drawY,
      this.width,
      this.height
      );
};

