var canvas;
var gameState =0;
var playerCount = 0;
var database , form, player, game;
var allPlayers;
var player1,player2;
var players;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();

}

function draw(){

 if(playerCount === 2){
   game.update(1);
 }
 if(gameState === 1){
   clear();
   game.play();
 }

   
}



