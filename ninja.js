function random(max,min){
    return Math.floor(Math.random()* (max-min +1))+min;
    }

    var world = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),0,1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
    [1,1,1,1,1,1,1,1,1,1],


    ];
    var worldDict = {
      0: 'blank',
      1: 'wall',
      2: 'sushi',
      3: 'onigiri',

    }
    var score =0;
    console.log("score= "+score);

    function drawWorld(){
      var output = "";
      for(var row = 0; row <world.length; row++){
        output += "<div class = 'row'>"
        for(var x=0; x< world[row].length; x++){
          output += "<div class = '"+worldDict[world[row][x]] +"'></div>"
          //worldDict[world[row][x]]
        }
        output += "</div>"
      }

      document.getElementById('world').innerHTML = output;

    }
    drawWorld();

    var ninjaman = {
      x: 1,
      y: 1,

    }

    function drawNinjaman(){
      document.getElementById('ninjaman').style.top = ninjaman.y*40+'px'
      document.getElementById('ninjaman').style.left = ninjaman.x*40+'px'
    }
    drawNinjaman();

    var enemy = {
      x: 8,
      y: 6,
    }

    function drawEnemy(){
      document.getElementById('enemy').style.top = enemy.y*40+'px'
      document.getElementById('enemy').style.left = enemy.x*40+'px'
    }
    drawEnemy();

    function moveEnemy(){
      var move = random(-1,4);
      if(move ===0 && (world[enemy.y][enemy.x-1] !==1)){//0 = left
        enemy.x--;
      } 
      else if(move ===1 && (world[enemy.y][enemy.x+1] !==1)){//1 = right
        enemy.x++;
      }
      else if(move ===2 && (world[enemy.y-1][enemy.x] !==1)){//2 = up
      enemy.y--;
      }
      else if(move ===3 && (world[enemy.y+1][enemy.x] !==1)){//3 = down
      enemy.y++;
      }
      }

    var lives = 3;
    console.log("lives= "+lives);

   

    document.onkeydown = function(e){
      if(e.keyCode === 37){ //left
        if(world[ninjaman.y][ninjaman.x-1] !==1){
       ninjaman.x--;
      }
    }
      if(e.keyCode === 38){ //up
         if(world[ninjaman.y-1][ninjaman.x] !==1){
       ninjaman.y--;
      }
     }
      if(e.keyCode === 39){ //right
        if(world[ninjaman.y][ninjaman.x+1] !==1){
       ninjaman.x++;
      }
     }
      if(e.keyCode === 40){ //down
        if(world[ninjaman.y+1][ninjaman.x] !==1){
       ninjaman.y++;
      }
    }
    if(world[ninjaman.y][ninjaman.x] === 2){
      world[ninjaman.y][ninjaman.x] =0;
      score+=10;
      console.log("score= "+score);}
    else if(world[ninjaman.y][ninjaman.x] === 3){
      world[ninjaman.y][ninjaman.x] =0;
      score+=5;
      console.log("score= "+score);
     }
    if((ninjaman.x === enemy.x) && (ninjaman.y === enemy.y)){
      lives -=1;
    console.log("lives= "+lives)
    }
    if(lives ===0){
    document.write("Game Over!</br>Your Score= "+score)
    }
    drawNinjaman()
    drawWorld()
  }
  function gameLoop() {
    drawNinjaman();
    drawEnemy();
    moveEnemy();
    drawEnemy();

    setTimeout(gameLoop, 750)
  }
  gameLoop();