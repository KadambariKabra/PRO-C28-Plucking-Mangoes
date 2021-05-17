class Stone {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            densiy: 1.2 
        }
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(255, 0, 255);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}