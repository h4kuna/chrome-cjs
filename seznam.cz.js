setTimeout(function() {
    $('div.gadget gadget--firmy').remove();
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
}, 1000);
