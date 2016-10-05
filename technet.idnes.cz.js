(function() {
    var interval = setInterval(function() {
        var $foundNews = $('#najdete');
        if(!$foundNews.size()) {
            return;
        }
        clearInterval(interval);

        var day = (new Date()).getDay();
        if (day > 0 && day < 6) {
            $foundNews.remove();
            $('#hlavniz').remove();
        }
    }, 500);
})();
