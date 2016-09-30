(function(block) {
    var interval = setInterval(function() {
        if(!$('div.timeline ul.timeline__list li').size()) {
            return;
        }
        clearInterval(interval);

        var day = (new Date()).getDay();
        if (day > 0 && day < 6) {
            $('div.timeline').remove();
        } else {
            $('div.timeline ul.timeline__list li').each(function(k, v) {
                if($('.timeline-article__header a', v).text() == 'Super') {
                    $(v).remove();
                }
            });
        }
    }, 500);
})();
