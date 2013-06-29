
// Animation
function animate() {
	requestAnimationFrame(animate);
	update();
	render();
}

function update() {
	objects['balls'].objects[0].update();
	objects['paddles'].objects[0].update();
	stats.update();
}

// Rendering
function render() {
	renderer.render(scene, camera);
}