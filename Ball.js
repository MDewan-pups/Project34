class Ball {

  constructor(x,y, r) {

      var options = {
          restitution:1,
          density:1.2,
          friction:0,
          isStatic: false
      }

      this.body = Bodies.circle(x,y,r, options);
World.add(world,this.body)
this.radius=r;
    }

    display(){

      var pos= this.body.position;
    
      push();
     // translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop()
    
    }
}