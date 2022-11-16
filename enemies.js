//creating function to spawn zombies
function enemy(){
    if(frameCount%50===0){
  
      //giving random x and y positions for zombie to appear
      zombie = createSprite(random(700,1100),random(100,500),40,40)
  
      zombie.addImage(zombieImg)
      zombie.scale = 0.15
      zombie.velocityX = -3
      zombie.debug= true
      zombie.setCollider("rectangle",0,0,400,400)
     
      zombie.lifetime = 400
     zombieGroup.add(zombie)
    }
  
}

