let currentSlide = 0;

function updateSlideContentVisibility() {
	let slideContents = $('.slide-content');
	for(let i = 0; i < slideContents.length; ++i) {
		let slideContent = slideContents.eq(i);
		let visibleFrom = slideContent.data('visible-from');
		if(visibleFrom != null) {
			slideContent.css('visibility',
				currentSlide >= visibleFrom ? 'visible' : 'hidden');
		}
	}
}

function main() {
	updateSlideContentVisibility();
	nextSlide();
	$('body').keydown(e => {
		if(e.key == "ArrowRight") {
			currentSlide++;
			updateSlideContentVisibility();
			nextSlide();
		}
	});
}

$(main);
