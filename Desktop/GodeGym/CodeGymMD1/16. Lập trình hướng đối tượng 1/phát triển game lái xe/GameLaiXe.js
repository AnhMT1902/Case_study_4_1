class Car {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.SpeedX = 10;
        this.SpeedY = 10;
    }

    moveToLeft() {
        this.x -= this.SpeedX;
        this.display();
    }

    moveToRight() {
        this.x += this.SpeedX;
        this.display();
    }

    moveToBottom() {
        this.y -= this.SpeedY;
        this.display();
    }

    moveToTop() {
        this.y += this.SpeedY;
        this.display()
    }

    display() {
        let lambor = document.getElementById("lambor");
        lambor.style.position = 'absolute';
        lambor.style.width = this.width + 'px';
        lambor.style.height = this.height + 'px';
        lambor.style.top = this.x + 'px';
        lambor.style.left = this.y + 'px';
    }
}

let lamborghini = new Car(100, 100, 30, 50);
lamborghini.display();
window.addEventListener("keydown", (key) => {
    console.log(key)
    if (key.keyCode == 37) {
        lamborghini.moveToBottom();
    }
    if (key.keyCode == 38) {
        lamborghini.moveToLeft();
    }
    if (key.keyCode == 39) {
        lamborghini.moveToTop();
    }
    if (key.keyCode == 40) {
        lamborghini.moveToRight();
    }
})