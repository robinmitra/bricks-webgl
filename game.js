window.requestAnimFrame = (function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function (callback) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

window.cancelRequestAnimFrame = (function () {
	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
})();

var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d");

var height = window.innerHeight,
	width = window.innerWidth;

var mouse = {};

canvas.width = width;
canvas.height = height;
ctx.fillRect(0, 0, width, height);

var particles = [], paddle = [],
	ball = {
		x: 50, y: 50, r: 5, c: 'white', vx: 4, vy: 8,
		draw: function () {
			ctx.beginPath();
			ctx.fillStyle = this.c;
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
			ctx.fill();
		}
	};

function Paddle() {
	this.height = 5;
	this.width = 150;
	this.x = width / 2 - this.width / 2;
	this.y = height - this.height;
}

paddle.push(new Paddle());

function paintCanvas() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);
}

function draw() {
	paintCanvas();
	p = paddle[0];
	ctx.fillStyle = "white";
	ctx.fillRect(p.x, p.y, p.width, p.height);
	ball.draw();
	update();
}

function animLoop() {
	init = requestAnimFrame(animLoop);
	draw();
}

animLoop();

function update() {
	ball.x += ball.vx;
	ball.y += ball.vy;

	if (mouse.x && mouse.y) {
		p = paddle[0];
		p.x = mouse.x - p.width / 2;
	}

	if (testCollision(ball, paddle[0])) {
		ball.vy *= -1;
	} else {
		if (ball.y + ball.r > height) {
			gameOver();
		} else if (ball.y - ball.r <= 0) {
			ball.vy *= -1;
		}
		if (ball.x + ball.r > width) {
			ball.vx *= -1;
		}
		else if (ball.x - ball.r < 0) {
			ball.vx *= -1;
		}
	}
}

canvas.addEventListener("mousemove", trackPosition, true);

function trackPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function testCollision(b, p) {
	return    b.x + b.r >= p.x
		&& b.x - b.r <= p.x + p.width
		&& b.y + b.r >= p.y;
}

function gameOver() {
	ctx.fillStyle = "white";
	ctx.font = "20px Arial";
	ctx.textAlign = "center";
	ctx.fillText("Game Over", width / 2, height / 2);
	cancelRequestAnimFrame(init);
}