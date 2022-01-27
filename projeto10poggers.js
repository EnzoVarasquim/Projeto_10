var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var mortes = 0;
 
 var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8,
 enemy9, enemy10, enemy11, enemy12, enemy13, enemy14, enemy15, enemy16, 
 enemy17, enemy18, enemy19;
 
 var player;
 
  var comeco = createSprite(100,50,97,47);
  comeco.shapeColor = "lightgreen";
  var fim = createSprite(300,50,97,47);
  fim.shapeColor = "lightgreen";
  
  player = createSprite(75,50,13,13);
  player.shapeColor = "red";

 var parede1 = createSprite(100,25,100,3);
  parede1.shapeColor = "black";
 var parede2 = createSprite(300,25,100,3);
  parede2.shapeColor = "black";
 var parede3 = createSprite(150,62,3,75);
  parede3.shapeColor = "black";
 var parede4 = createSprite(250,62,3,75);
  parede4.shapeColor = "black";
 var parede5 = createSprite(50,50,3,50);
  parede5.shapeColor = "black";
 var parede6 = createSprite(350,50,3,50);
  parede6.shapeColor = "black";
 var parede7 = createSprite(315,75,70,3);
  parede7.shapeColor = "black";
 var parede8 = createSprite(85,75,70,3);
  parede8.shapeColor = "black";
 var parede9 = createSprite(120,150,3,150);
  parede9.shapeColor = "black";
 var parede10 = createSprite(280,150,3,150);
  parede10.shapeColor = "black";
 var parede11 = createSprite(235,100,30,3);
  parede11.shapeColor = "black";
 var parede12 = createSprite(165,100,30,3);
  parede12.shapeColor = "black";
 var parede13 = createSprite(85,225,70,3);
  parede13.shapeColor = "black";
 var parede14 = createSprite(315,225,70,3);
  parede14.shapeColor = "black";
 var parede15 = createSprite(180,181,3,165);
  parede15.shapeColor = "black";
 var parede16 = createSprite(220,181,3,165);
  parede16.shapeColor = "black";
 var parede17 = createSprite(50,278,3,110);
  parede17.shapeColor = "black";
 var parede18 = createSprite(350,278,3,110);
  parede18.shapeColor = "black";
 var parede19 = createSprite(85,330,70,3);
  parede19.shapeColor = "black";
 var parede20 = createSprite(315,330,70,3);
  parede20.shapeColor = "black";
 var parede21 = createSprite(150,260,60,3);
  parede21.shapeColor = "black";
 var parede22 = createSprite(250,260,60,3);
  parede22.shapeColor = "black";
 var parede23 = createSprite(120,276,3,35);
  parede23.shapeColor = "black";
 var parede24 = createSprite(280,276,3,35);
  parede24.shapeColor = "black";
 var parede25 = createSprite(200,295,163,3);
  parede25.shapeColor = "black";
 var parede26 = createSprite(200,360,163,3);
  parede26.shapeColor = "black";
 var parede27 = createSprite(120,345,3,30);
  parede27.shapeColor = "black";
 var parede28 = createSprite(280,345,3,30);
  parede28.shapeColor = "black";
  
  var paredeinvisivel1 = createSprite(117,278,3,100);
  paredeinvisivel1.shapeColor = "lavender";
  paredeinvisivel1.visible = false;
  var paredeinvisivel2 = createSprite(283,278,3,100);
  paredeinvisivel2.shapeColor = "lavender";
  paredeinvisivel2.visible = false;
  
  enemy1 = createSprite(165,120,12,12);
  enemy1.shapeColor = "blue";
  enemy1.velocityX = 3;
  enemy2 = createSprite(130,150,12,12);
  enemy2.shapeColor = "blue";
  enemy2.velocityX = -3;
  enemy3 = createSprite(165,180,12,12);
  enemy3.shapeColor = "blue";
  enemy3.velocityX = 3;
  enemy4 = createSprite(130,210,12,12);
  enemy4.shapeColor = "blue";
  enemy4.velocityX = -3;
  
  enemy5 = createSprite(225,120,12,12);
  enemy5.shapeColor = "blue";
  enemy5.velocityX = 3;
  enemy6 = createSprite(270,150,12,12);
  enemy6.shapeColor = "blue";
  enemy6.velocityX = -3;
  enemy7 = createSprite(225,180,12,12);
  enemy7.shapeColor = "blue";
  enemy7.velocityX = 3;
  enemy8 = createSprite(270,210,12,12);
  enemy8.shapeColor = "blue";
  enemy8.velocityX = -3;

  enemy9 = createSprite(140,300,12,12);
  enemy9.shapeColor = "blue";
  enemy9.velocityY = 3;
  enemy10 = createSprite(170,355,12,12);
  enemy10.shapeColor = "blue";
  enemy10.velocityY = -3;
  enemy11 = createSprite(200,300,12,12);
  enemy11.shapeColor = "blue";
  enemy11.velocityY = 3;
  enemy12 = createSprite(230,355,12,12);
  enemy12.shapeColor = "blue";
  enemy12.velocityY = -3;
  enemy13 = createSprite(260,300,12,12);
  enemy13.shapeColor = "blue";
  enemy13.velocityY = 3;
  
  enemy14 = createSprite(55,240,12,12);
  enemy14.shapeColor = "blue";
  enemy14.velocityX = 3;
  enemy15 = createSprite(110,275,12,12);
  enemy15.shapeColor = "blue";
  enemy15.velocityX = -3;
  enemy16 = createSprite(55,315,12,12);
  enemy16.shapeColor = "blue";
  enemy16.velocityX = 3;
  
  enemy17 = createSprite(345,240,12,12);
  enemy17.shapeColor = "blue";
  enemy17.velocityX = -3;
  enemy18 = createSprite(290,275,12,12);
  enemy18.shapeColor = "blue";
  enemy18.velocityX = 3;
  enemy19 = createSprite(345,315,12,12);
  enemy19.shapeColor = "blue";
  enemy19.velocityX = -3;

 var INIMIGOS = createGroup();
 
 INIMIGOS.add(enemy1);
 INIMIGOS.add(enemy2);
 INIMIGOS.add(enemy3);
 INIMIGOS.add(enemy4);
 INIMIGOS.add(enemy5);
 INIMIGOS.add(enemy6);
 INIMIGOS.add(enemy7);
 INIMIGOS.add(enemy8);
 INIMIGOS.add(enemy9);
 INIMIGOS.add(enemy10);
 INIMIGOS.add(enemy11);
 INIMIGOS.add(enemy12);
 INIMIGOS.add(enemy13);
 INIMIGOS.add(enemy14);
 INIMIGOS.add(enemy15);
 INIMIGOS.add(enemy16);
 INIMIGOS.add(enemy17);
 INIMIGOS.add(enemy18);
 INIMIGOS.add(enemy19);

 var PAREDES = createGroup();
 
  PAREDES.add(parede1);
  PAREDES.add(parede2);
  PAREDES.add(parede3);
  PAREDES.add(parede4);
  PAREDES.add(parede5);
  PAREDES.add(parede6);
  PAREDES.add(parede7);
  PAREDES.add(parede8);
  PAREDES.add(parede9);
  PAREDES.add(parede10);
  PAREDES.add(parede11);
  PAREDES.add(parede12);
  PAREDES.add(parede13);
  PAREDES.add(parede14);
  PAREDES.add(parede15);
  PAREDES.add(parede16);
  PAREDES.add(parede17);
  PAREDES.add(parede18);
  PAREDES.add(parede19);
  PAREDES.add(parede20);
  PAREDES.add(parede21);
  PAREDES.add(parede22);
  PAREDES.add(parede23);
  PAREDES.add(parede24);
  PAREDES.add(parede25);
  PAREDES.add(parede26);
  PAREDES.add(parede27);
  PAREDES.add(parede28);

  var PAREDESINVISIVEIS = createGroup();
  
  PAREDESINVISIVEIS.add(paredeinvisivel1);
  PAREDESINVISIVEIS.add(paredeinvisivel2);

function draw() {
  
  background("lavender");
  textAlign(CENTER, 20);
  textSize(18);
  fill("black");
  text("Mortes: " + mortes,200,20);
  strokeWeight(0);
  
  
  colisao();

  movimentoPlayer ();

  if (player.isTouching(INIMIGOS)){
    mortes = mortes + 1;
    player.x = 75;
    player.y = 50;
  }
  
  if (player.isTouching(fim)){
    textAlign(CENTER, 150);
    textSize(25);
    fill("black");
    text("Parabéns! Você Venceu",200,200);
    player.setVelocity(0, 0);
    INIMIGOS.setVelocityEach(0, 0);
    player.visible = false;
    fim.visible = false;
    comeco.visible = false;
    INIMIGOS.setVisibleEach(false);
    PAREDES.setVisibleEach(false);
    PAREDESINVISIVEIS.setVisibleEach(false);
  }


  function colisao (){
    
  createEdgeSprites();
  player.bounceOff(edges);
  player.bounceOff(PAREDES);
  INIMIGOS.bounceOff(PAREDES);
  INIMIGOS.bounceOff(PAREDESINVISIVEIS);
  }


function movimentoPlayer (){
  if (keyDown("LEFT_ARROW")) {
    player.x = player.x - 4;
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x = player.x + 4;
  }
  if (keyDown("UP_ARROW")) {
    player.y = player.y - 4;
  }
  if (keyDown("DOWN_ARROW")) {
    player.y = player.y + 4;
  }
}

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
