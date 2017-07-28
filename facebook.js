(function() {
    var interval = setInterval(function() {
    	var ads = jQuery('.ego_column');
    	if (ads.size() === 0) {
    		return;
    	}
	    ads.remove();
        clearInterval(interval);
    }, 1000);
})();
