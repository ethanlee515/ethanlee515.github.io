let width = 800;
let height = 500;

function makeCanvas(width, height) {
		let canvas = $(`<canvas width='${width}' height = '${height}'></canvas>`);
		let container = $("<div class='canvas-container' />");
		container.css({
					width,
					height
				});
		container.append(canvas);
		return container;
}

function makeCanvasWithParties() {
	let container = makeCanvas(width, height);


}


function nextSlide() {
	switch(currentSlide) {
		case 7: {
			location.href = "https.html";
			break;
		}
	}
}
