class Paper {
  constructor(x, y,radius) {
    var options = {
        isStatic:false,
        restitution:0.2,
        friction:1.7,
        density:4
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    //rectMode(CENTER)
    imageMode(CENTER);
    image(this.image,0, 0, this.radius,this.radius);
    pop();
  }
}
