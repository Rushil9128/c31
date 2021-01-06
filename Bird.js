class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.smokeImg = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position =  [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
    
    for (let index = 0; index < this.trajectory.length; index++) {
      image(this.smokeImg,this.trajectory[index][0],this.trajectory[index][1]);
      
    }


  }
}
