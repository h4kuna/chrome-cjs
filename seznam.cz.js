(function(list) {
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
                if(list.indexOf($('.timeline-article__header a', v).text()) >= 0) {
                    $(v).remove();
                }
            });
        }
    }, 500);
})(['Aha', 'Super']);
