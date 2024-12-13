class Player {
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.whidth;
        this.height;
        this.speedY;
    }

    draw (){
        this.game.ctx.fillRect(this.x, this.y, this.whidth, this.height);
    }
    update() {
        this.y += this.speedY;
        if(this.isTouchingBottom()) {
            this.y = this.game.height - this.height;
        }
        else    {
            this.speedY += this.game.gravity;
        }
    }
    resize() {
        this.whidth = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
        this.y = this.game.height *  0.5 - this.height - 5;
        this.y = -8 * this.game.ratio;
    }
    isTouchingBottom()  {
        return this.y >= this.game.height - this.height;
    }
}