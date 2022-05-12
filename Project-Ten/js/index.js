$(document).ready(function(){
    let windowWidth;
    let mobile = $('.mobile');

    setInterval(function () {
        if ($(window).width() < 640) {
            // $('.mobile').show();
            windowWidth = $(window).width();
        }
        else {
            $('.mobile').hide();
            mobile.removeAttr('style');
            $('.m-menu').show();
        }
    },50);
    $('.m-trg').click(function () {
        if (mobile.hasClass('open')) {
            mobile.hide();
            mobile.removeClass('open');
        }
        else {
            mobile.addClass('open');
            mobile.show();
        }
    });

    /**
     * Slide
     */
        $('.one').click(function () {
            $('.one-text').slideToggle();
        });
        $('.two').click(function () {
            $('.two-text').slideToggle();
        });
        $('.thr').click(function () {
            $('.thr-text').slideToggle();
        });
        $('.four').click(function () {
            $('.for-text').slideToggle();
        });
        $('.five').click(function () {
            $('.fiv-text').slideToggle();
        });
        $('.six').click(function () {
            $('.six-text').slideToggle();
        });
        $('.seven').click(function () {
            $('.seven-text').slideToggle();
        });
        $('.eight').click(function () {
            $('.eight-text').slideToggle();
        });
        $('.nine').click(function () {
            $('.nine-text').slideToggle();
        });
});