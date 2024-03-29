class Slingshot{
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            length:10,
            stiffness: 0.04,
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options) ;
        World.add(world,this.sling);
    }
    display(){
        strokeWeight(7)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
    fly(){
        this.sling.bodyA = null 
    }
}
  
