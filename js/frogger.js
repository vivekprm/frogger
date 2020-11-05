class Frogger {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;

        // Frog's first appearence
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        // Hold coordinates in sprite-sheet
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        // console.log("updating");
        if(keys[38]) {  // Up
            if(this.moving === false) {
                this.y -= grid;
                this.moving = true;
            }
        }
        if(keys[40]) {  // Down
            if(this.y < canvas.height - this.height * 2 && this.moving === false) {
                this.y += grid;
                this.moving = true
            }
        }
        if(keys[37]) {  // Left
            if(this.x > this.width && this.moving === false) {
                this.x -= grid;
                this.moving = true
            }
        }
        if(keys[39]) {  // Right
            if(this.x < canvas.width - this.width * 2 && this.moving === false) {
                this.x += grid;
                this.moving = true
            }
        }
    }
    draw() {
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }
    jump() {
        console.log('Jump');
    }
}

const frogger = new Frogger();