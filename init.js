(function() {
    var interval = setInterval(function() {
        var $list = $('select elements');
        if(!$list.size()) {
            return;
        }
        clearInterval(interval);
        /* here write the code */
    }, 500);
})();
