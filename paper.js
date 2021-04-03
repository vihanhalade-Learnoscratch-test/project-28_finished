class Paper {
    constructor(x,y,radius) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':1.3,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("sprites/paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //fill("red");
      imageMode(CENTER)
      //image(this.image,pos.x, pos.y, this.radius);
      image(this.image,pos.x,pos.y,50,50)
    }
  }