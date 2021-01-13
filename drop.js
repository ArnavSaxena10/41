class Drop{
    constructor(x,y){
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 2, options);
        this.radius= 2;

        World.add(world, this.body);
    }

    display(){
    
        var pos= this.body.position
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius)

        if(pos.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(-400,400)});
        }
    }
}