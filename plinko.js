class Plinko {
    constructor(x,y) {
      var options = {
          isStatic:true,
          density:1.2
      }
      
      this.radius=10;
   this.body = Bodies.circle(x,y,10,options);    
      World.add(world,this.body);

    }
    display(){
      var pos =this.body.position;
      fill(230,180,197);
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,this.radius,this.radius);
  
}

  };
 