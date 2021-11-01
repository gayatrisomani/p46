var gun,gunan;
var target,targetImg,targetGroup,target2,target3,target4;
var bul,bullet,bulGroup;
var backImg;
var isDestroyed = false;
var score = 0

function preload(){
    gunan = loadImage("k.png")
    targetImg = loadImage("t.png")
    backImg = loadImage("background.png")
    gsound = loadSound("M1887.mp3")
    target2 = loadImage("c.png")
    target3 = loadImage("orange.png.png")
   
}
function setup() {
    createCanvas(1500, 750);


    gun = createSprite(100,670,30,40)
    gun.addImage(gunan)
    gun.scale = 0.2

    target = createSprite(60,200,50,70)
    target.addImage(targetImg)
    target.scale = 0.1
    target.velocityY = 2

    targetGroup = new Group()
  }
  
  function draw() {
    background( backImg);
    fill("black")
    textSize(20)
    text(score,1200,50)
    
    if(keyDown("left")){
        gun.x = gun.x-20
    }
    if(keyDown("right")){
        gun.x = gun.x+20
    }
    if(keyDown("space")){      
        gun.velocityY = -10
    }
    if(target.y >600 ){
        gun.visible = false
        gameOver()
    }
    rtarget();
   // target.overlap(bulGroup, function(collector, collected) {
       
        //collected is the sprite in the group collectibles that triggered
        //the event
       // collected.remove();
     // });
     if(target.isTouching(gun)){
         console.log("www")
         target.visible=false
        isDestroyed = true
     }
    drawSprites();
  }
  function rtarget(){
  
     if( isDestroyed){
         x = random(100,1500)
         y = random(50,400)
         target = createSprite(x,y,50,70)
          
          var rand = Math.round(random(1,4));
          switch(rand) {
            case 1:target.addImage(targetImg);
                   target.scale = 0.1
                    break;
            case 2: target.addImage(target2);
                    target.scale = 0.2
                    break;
            case 3:target.addImage(target3);
                   target.scale = 0.1
                    break;
            default: break;
          }
          
          target.velocityY = 2
          score += 10
          isDestroyed = false
     }
  }
  function gameOver() {
    swal(
      {
        title: `Game Over!!!`,
        text: "Thanks for playing!!",
        imageUrl:
          "https://e7.pngegg.com/pngimages/752/485/png-clipart-ajin-demi-human-kei-nagai-anime-%E4%BA%9A%E4%BA%BA-manga-anime-monochrome-cartoon.png",
        imageSize: "150x150",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }
  

  