(function() {
	var date = new Date();
	var day = date.getDay();
	var time = date.getHours();
	if (day > 0 && day < 6 && time > 5 && time < 16) {
		document.getElementsByTagName('BODY')[0].innerHTML = '<h1>Back to work!!</h1>';
	}
})();
