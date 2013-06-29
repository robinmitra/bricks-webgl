/**
 * Paddles
 */

function initPaddles() {
	drawPaddles();
}

function drawPaddles() {
	var width							= 0.5,
		height							= 0.02,
		breadth							= 0.2,
		startPosX						= -1,
		startPosY						= 0;

	objects['paddles']					= {type: "paddles", objects: []};

	var paddleObj						= new Paddle(startPosX, startPosY, width, height, breadth);
	paddleObj.draw();
	objects['paddles'].objects.push(paddleObj);
}

function Paddle(startPosX, startPosY, width, height, breadth) {
	this.width							= width;
	this.height							= height;
	this.breadth						= breadth;

	this.draw = function() {
		this.geometry					= new THREE.CubeGeometry(this.width, this.height, this.breadth);
		this.material					= new THREE.MeshPhongMaterial({color: 0xffaa55});
		this.mesh						= new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(startPosX, startPosY, 0);
		scene.add(this.mesh);
	}

	this.update = function() {
		this.move();
	}

	this.move = function() {
		// Move with mouse

//		console.log(mouse.x);
		if (mouse.x && mouse.y) {
			this.mesh.position.x		= mouse.x;
//			console.log(mouse.x);
		}
	}
}