$(document).ready(function () {
    $("#scroll").click(function () {
        $('html, body').animate({scrollTop: window.innerHeight}, 'slow');
    });
});