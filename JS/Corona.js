class Corona{
constructor(x,y,width,height){
    //this.body = createSprite(x,y,width,height);
    //this.body.addImage("corona",coronaImage1);
    
}
  spawnCorona1(){
    if(frameCount% 300 === 0 && frameCount% 270 !== 0 && 
      frameCount% 950 !== 0 && frameCount% 755 !== 0){
        console.log("corona1");
        var corona1 = createSprite(1200,random(250,300),10,10);
        corona1.addImage("corona",coronaImage1);
        corona1.scale = 0.1
        corona1.velocityX = -2
        
     }
  }
  spawnCorona2(){
    if(frameCount% 270 === 0 && frameCount% 300 !== 0 && 
       frameCount% 950 !== 0 && frameCount% 700 !== 0){
        console.log("corona2");
        var corona2 = createSprite(1200,random(250,300),10,10);
        corona2.addImage("corona",coronaImage2);
        corona2.scale = 0.1
        corona2.velocityX = -2
        
     }
  }
  spawnCorona3(){
    if(frameCount% 950 === 0 && frameCount% 300 !== 0 && 
      frameCount% 270 !== 0 && frameCount% 755 !== 0){
        console.log("corona3");
        var corona3 = createSprite(1200,random(250,300),10,10);
        corona3.addImage("corona",coronaImage3);
        corona3.scale = 0.1
        corona3.velocityX = -2
        
     }
   }

   spawnCorona4(){
      if(frameCount% 755 === 0 && frameCount% 300 !== 0 && 
        frameCount% 270 !== 0 && frameCount% 950 !== 0){
          console.log("corona4");
          var corona3 = createSprite(1200,random(250,300),10,10);
          corona3.addImage("corona",coronaImage4);
          corona3.scale = 0.1
          corona3.velocityX = -2
          
       }
     }

   }
