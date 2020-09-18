class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        // image(this.rope1,200,20);
        // image(this.rope2,170,20);
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            pop();
     }
}
    
