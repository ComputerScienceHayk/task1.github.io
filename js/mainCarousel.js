$(function () {
    $('#homeCarousel').carousel({
        interval:2000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#homeCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#homeCarousel').carousel('pause');
    });
});
$(function () {
    $('#smallCarousel').carousel({
        interval:2000,
        pause: "false"
    });
    $('#smplayButton').click(function () {
        $('#smallCarousel').carousel('cycle');
    });
    $('#smpauseButton').click(function () {
        $('#smallCarousel').carousel('pause');
    });
});