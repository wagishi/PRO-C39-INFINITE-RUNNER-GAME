class Game{
    constructor(){

    }
     getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }

     update(state) {
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
               playerCount = playerCountref.val();
               player.getCount();
            }

            form = new Form()
            form.display();
        }
        
        player1 = createSprite(100,200);
        player2 = createSprite(100,400);
        players = [player1,player2];
        
    }
    play(){
        form.hide();
        textSize(30);
        text("GAME STARTED",130,100);
        Player.getPlayerInfo();

        if(allPlayers !== 0){
            var index = 0;
            var y ;
            var x = 200;
            for(var plr in allPlayers){
                index = index+1;
                x= x+400;
                y = displayHeight-allPlayers[plr].distance;
                players [index-1].x = x;
                players [index-1].y = y;
                if(index === player.index){
                   players [index-1].shapeColor = "red";
                   camera.position.x = displayWidth/2;
                   camera.position.y =players[index-1].y;
                }
            }
             
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50
            player.update();
        }
        drawSprites();
    }

}

