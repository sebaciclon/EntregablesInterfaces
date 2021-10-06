"use strict";

/**@type {HTMLCanvasElement} */

class FichaCuadrada extends Ficha {

    constructor(posX, posY, width, height, fill, ctx) {
        super(posX, posY, fill, ctx);
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    draw() {
        super.draw();
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);

        if(this.resaltado === true) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(this.posX, this.posY, this.width, this.height);
        }
    }

    isPointInside(x, y) {
        return !(x < this.posX || x > this.posX + this.width || y < this.posY || y > this.posY + this.height);
    }
}