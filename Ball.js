class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:0.7
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            ellipse(0,0,this.radius,this.radius);
        pop()
    }   
}