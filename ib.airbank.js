(function() {
    var interval = setInterval(function() {
        var products = document.querySelectorAll('.mhtColRight .mhtHPProduct');
        for (var i in products) {
        	var product = products[i];
        	product.parentNode.removeChild(product);
        }
    }, 500);
})();
