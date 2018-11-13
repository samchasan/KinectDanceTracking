class Particle {

    constructor(x, y, hu, xVel, yVel) {
        this.pos = createVector(x, y)
        this.lifespan = 100
        this.hu = hu;
        this.acc = createVector(0, -0.90);


        if (this.firework){
          this.vel = createVector(xVel,yVel)
        } else {
        // this.vel = createVector(xVel,yVel)
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 13));
        this.vel.sub(0,10)
        }
    }

    applyForce(force) {
        this.acc.add(force)
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        if (this.pos.x >= width){
          this.pos.x = 0
        }
        if (this.pos.x < 0){
          this.pos.x = width
        }
        this.acc.mult(0);
        this.lifespan -= 1
    }

    done() {
        if (this.lifespan <= 0) {
            return true;
        } else {
            return false;
        }
    }


    show() {
        if (this.firework) {
            strokeWeight(10);
            stroke(this.hu, 230, 100, this.lifespan);
        } else {
            strokeWeight(10);
            stroke(this.hu, 230, 100, this.lifespan);
            point(this.pos.x, this.pos.y)
        }
    }
}
