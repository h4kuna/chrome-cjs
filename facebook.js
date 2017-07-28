(function() {
    var interval = setInterval(function() {
    	var ads = jQuery('.ego_column');
    	if (ads.size() === 0) {
    		return;
    	}
        ads.remove();
        clearInterval(interval);
    }, 1000);
    
    setInterval(function() {
        $('div[id^=hyperfeed_story_id_]').filter(function(i, element) {
            return $('div._14bf a._3e_2', element).size() > 0;
        }).remove();
    }, 2000);
})();
