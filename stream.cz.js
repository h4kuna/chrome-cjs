(function(block) {
    var interval = setInterval(function() {
        var $list = $('div.results ul li');
        if(!$list.size()) {
            return;
        }
        clearInterval(interval);
        $list.each(function(k, v) {
            var $v = $(v);
            if(block.indexOf($('span.tl-show', $v).text()) !== -1) {
                $v.remove();
            }
        });
    }, 1000);
})(["Swajp", "Vaříme s Mírou", "Žrouti", "New You", "Fenomén", "Minuta módy", "Koko Food"]);
