(function() {
    var d = new Date();
    var day = d.getDay();
    if (day > 0 && day < 6 && d.getHours() > 6 && d.getHours() < 16) {
        document.getElementsByTagName('BODY')[0].innerHTML = '<h1>Back to work!</h1>';
    }
})();

