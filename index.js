const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//detects collisions
let sphereCollide = (eleA, eleB) => {
    let distance = Math.hypot(eleA.x - eleB.x, eleA.y - eleB.y);
    let sumRadii = eleA.radius + eleB.radius;

    return distance <= sumRadii;
}

class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius,0,2 * Math.PI,false);
        ctx.fill();
    }
}

//initiates objects
let color = 'orange';
const pball = new Ball(100,250,30, color);
const ball = new Ball(canvas.width / 2, canvas.height / 2, 50, color);

const objectToMove = pball;
const Objects = [ball, objectToMove];

let animate = () => {
    canvas.width = canvas.width;
    requestAnimationFrame(animate)
    
    Objects.forEach(element => {
        element.draw();
    });
}

addEventListener('mousemove',(event) => {
    let mouseX = event.clientX - ctx.canvas.offsetLeft;
    let mouseY = event.clientY - ctx.canvas.offsetTop;
    objectToMove.x = mouseX;
    objectToMove.y = mouseY;
    if (sphereCollide(ball,objectToMove)) {
        objectToMove.color = 'red';
    } else {
        objectToMove.color = 'orange';
    }
});

animate();


