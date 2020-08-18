class Box extends BaseClass {
  constructor(x,y){
    super(x,y,40,40);
    this.image = loadImage("square.png");
    this.visibility = 255;
  }
  display() {
    if(this.body!==null) {
      if(this.body.speed<9) {
        super.display();
      }else {
        World.remove(world, this.body);

        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        this.body = null;
        pop();
      }
    }
  }

};
