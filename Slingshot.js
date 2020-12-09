class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.A=loadImage("sprites/sling1.png");
        this.B=loadImage("sprites/sling2.png");
        this.P=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.A,230,110,27,110);
        image (this.B,210,115,27,60);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(color (48,22,8));
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+5);
           image (this.P,pointA.x-20,pointA.y,10,25);
        }
    }
    
}