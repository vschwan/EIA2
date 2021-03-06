namespace L11_1_FlowerMeadow {

    export class Cloud extends Moveable {
        private size: Vector;

        constructor(_position: Vector, _size?: Vector) {
            super(_position);

            this.velocity.add(new Vector(15, 0));

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            if (_size)
                this.size = _size.copy();
            else
                this.size = new Vector(0, 0);
        }

       public draw(): void {
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // console.log("drawCloud", this.position.x);

            let nPArticles: number = ((Math.random() * 80) + 50);
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.1)");

            crc2.save();


            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nPArticles; drawn++) {

                crc2.save();
                // Math.random() -0.5 gibt wert zwischen -0,5 und 0,5
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = -(Math.random() * this.size.y);

                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();

            }
            crc2.restore();
            crc2.restore();
        }

    }


}



