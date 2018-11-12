
class Firework {
    constructor(xpos,xVel, yVel) {
        this.hu = floor(random(256))
        this.height = 800
        this.firework = new Particle(xpos, this.height, this.hu, xVel, yVel)
        this.particles = []
        this.exploded = false
    }

    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.exploded = true
                this.explode();
            }
        }

        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity)
            this.particles[i].update();

        }
    }

    explode() {
        for (var i = 0; i < 10; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, p5.Vector.random2D(),p5.Vector.random2D());
            this.particles.push(p)
        }
      }

      done() {
        console.log('checking')
          if (this.exploded == true && this.particles[0].done()) {
              return true;
          } else {
              return false
          }
      }

    show() {
        if (!this.exploded) {
            this.firework.show()
        } else if (this.exploded){
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show()
        }
    }
}
}
