class Block{
    constructor(x, y, width, height){
        var options = {
            restitution : 1.1,
            friction : 0.5,
            isStatic : false
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<1){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility-2;
            tint(255, this.visibility);
            pop();
        }
    }
    Score(){
        if(this.visibility < 0 && this.visibility> -105){
            score++;
        }
    }
}
if(score<1664){
    background("yellow");
    fill("black");
    text("You Win");

}