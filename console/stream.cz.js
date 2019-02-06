/** load all pages on stream */
setInterval(function () {
	let button = document.querySelector('a.button--paging');
	if (button !== null) {
		button.click();
	}
}, 1000);

/** remove unfavorite boxies */
var boxes = $$('div.shows-box__card');
for (let i in boxes) {
	if ($('.show-card__favourited', boxes[i]) === null) {
		boxes[i].remove();
	}
}
