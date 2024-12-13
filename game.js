class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.raito = this.height / this.baseHeight
        this.player = new Player(this);
        this.gravity;   

        this.risize(window.innerWidth, window.innerHeight);

        window.addEventListener('risize', e => {
            this.risize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        });
    }
    
    risize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = '#559F2';
        this.raito = this.height / this.baseHeight;

        this.gravity = 0.15 * this.raito;
        this.player.resize;
    }
    render() {
       
        this.player.update();
        this.player.draw();
        
  
    }  
}
window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});

