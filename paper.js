class Paper{
    constructor(x, y){
        var options = {
            restitution:0.3,
            density:1.2,
            friction:0
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y = y;
        this.r = this.radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        fill("orange")
        imageMode(CENTER);
        image(this.image, 0, 0, 35, 35);
        pop();
    }
}