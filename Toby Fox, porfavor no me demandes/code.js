var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["344d0afb-bba6-41ad-95c6-321ce2cbd596","40e56fa4-d0b0-4b31-a773-dfcba310fa45","3f61cc9b-efd3-4044-96e3-e54ffb89edec","c88ad1dd-cedc-4c1c-a548-ef95b6be71a0","aa37cb73-d674-40a2-92a0-1574e31964e9"],"propsByKey":{"344d0afb-bba6-41ad-95c6-321ce2cbd596":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"2dy291i2WnM9O01Q49QUodQLoNIQQ7is","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/344d0afb-bba6-41ad-95c6-321ce2cbd596.png"},"40e56fa4-d0b0-4b31-a773-dfcba310fa45":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"JohTnW1PE3qLli0pgzQ3LO1tVQzbPeuL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/40e56fa4-d0b0-4b31-a773-dfcba310fa45.png"},"3f61cc9b-efd3-4044-96e3-e54ffb89edec":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1xunjVwg59ATzdJOdVOdMWf427RBreQY","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3f61cc9b-efd3-4044-96e3-e54ffb89edec.png"},"c88ad1dd-cedc-4c1c-a548-ef95b6be71a0":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4KTMpQt5jXysXjIXs1.R63dPVUs9aneo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c88ad1dd-cedc-4c1c-a548-ef95b6be71a0.png"},"aa37cb73-d674-40a2-92a0-1574e31964e9":{"name":"gradient_30_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":7,"looping":true,"frameDelay":2,"version":"fFSz7x6FawEVNST9Wibnh2_qVwsUeGkM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/aa37cb73-d674-40a2-92a0-1574e31964e9.png"}}};
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

var Deaths =0;
var End =createSprite (200,80, 400,100);
End.setAnimation("gradient_30_1");
End.scale.y = 0.2;  
var GameMode = "Serve";
var hero = createSprite(200,399,10,10);
hero.setAnimation("animation_1");
hero.scale = 1.5; 
var Heart1 = createSprite (1,300,10,10);
Heart1.setAnimation("animation_2");
Heart1.scale = 1.5;
var Heart2 = createSprite (70,200,10,10);
Heart2.setAnimation("animation_3");
Heart2.scale = 1.5;
var Heart3 = createSprite (101,100,10,10);
Heart3.setAnimation("animation_4");
Heart3.scale = 1.5;
Heart1.velocityX = 15;
Heart2.velocityX = 15;
Heart3.velocityX = 15;
function draw() {
  background(rgb(0,0,0));
  createEdgeSprites();
  if (GameMode == "Serve"){
   textSize(16.5);
   textFont("Times New Roman");
   fill(rgb(255, 255, 255));
   stroke("blue");
   text("llega a tu destino sin meterte en el camino de los demas", 21, 180);
   if (keyDown("Space")){
      playSound("assets/y2mate.com---Undertale-Ost-087--Hopes-and-Dreams.mp3", true);
      GameMode = "GamePlay1";
    }
  }
 if (GameMode == "GamePlay1") {
  if (keyDown("down")) {
    hero.y = hero.y + 3;
  }
  if (keyDown("up")) {
    hero.y = hero.y - 3;
  }
    
  
  if (hero.isTouching(Heart1) || hero.isTouching(Heart2) || hero.isTouching(Heart3)) {
    hero.y = 399;
    Deaths = Deaths +1;
    playSound("assets/category_alerts/vibrant_game_negative_affirmation.mp3");
  }
  if (hero.isTouching(End)){
    GameMode = "TheEnd";
  }
  if (GameMode=="TheEnd") {
    textSize(16.5);
   textFont("Times New Roman");
   fill(rgb(255, 255, 255));
    stroke(rgb(255, 255, 255));
   text("Sabia que podias hacerlo", 21, 180);
   hero.y = 50;
   Heart1.velocityX = 0;
    Heart2.velocityX = 0;
    Heart3.velocityX = 0;
   stopSound("assets/y2mate.com---Undertale-Ost-087--Hopes-and-Dreams.mp3");
    playSound("assets/y2mate.com---Deltarune-OST--Hometown-Day.mp3", true);
  }
 
}
   
 
   
   if (GameMode=="TheEnd") {
    textSize(16.5);
   textFont("Times New Roman");
   
   text("Sabia que podias hacerlo", 200, 180);
   }
   
text("Deaths? "+ Deaths, 50,370);
  hero.collide(edges);
  Heart1.bounceOff (edges);
  Heart2.bounceOff (edges); 
  Heart3.bounceOff (edges);
  Heart1.setCollider("circle",0, 0, 10);
 Heart2.setCollider("circle", 0, 0, 10);
 Heart3.setCollider("circle", 0, 0, 10);
 hero.setCollider("circle",0,0,10);
  End.setCollider("rectangle",0,0, 200,10);
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
