$(document).ready(function () {
    /* Scroll Bar Effect */
    $("#menu").scrollupbar();
    $('a').smoothScroll();

    /* Auto Height */
    var height = window.innerHeight;
    $("#intro, #job").height(height);
});
