function setup() {
	createCanvas(710, 700, WEBGL);
}

function draw() {
	background("#000000");

	rotateY(frameCount * 0.006);

	for (let j = 0; j < 5; j++) {
		push();
		for (let i = 0; i < 10; i++) {
			translate(
				sin(frameCount * 0.001 + j) * 100,
				sin(frameCount * 0.001 + j) * 100,
				i * 0.1
			);
			rotateZ(frameCount * 0.02);
			push();
			fill(255, 0, 0);
			sphere(15, 3, 10);
			pop();
		}

		pop();
	}
}

setup();
draw();