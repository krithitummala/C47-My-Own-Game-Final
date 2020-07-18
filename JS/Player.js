class Player{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
    }

behaviour(){
    if(keyDown("space")&& this.body.y>=244){
        this.body.velocityY = -15;
    }
   // console.log(this.body.y)
    this.body.velocityY = this.body.velocityY + 1
    this.body.collide(ground.body);

    if(keyDown(RIGHT_ARROW)){
        this.body.addAnimation("player",playerImage);
        this.body.velocityX = 3;
        this.body.VelocityY = 0;
    }
    if(keyDown(LEFT_ARROW)){
        this.body.addAnimation("player",playerImage2);
        this.body.velocityX = -3;
        this.body.VelocityY = 0;
    }
    this.body.collide(edges[0]);
    this.body.collide(edges[1]);
    
}
}