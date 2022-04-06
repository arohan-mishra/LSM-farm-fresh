/* global $ */
$(document).ready(function () {
    // For the sticky navigation
    $(".js--section-features").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }

    });

    // Button click scroll Movement
    $(".js--scroll-to-plan").click(function () {

        $("html,body").animate({
            scrollTop: $(".js--section-plans").offset().top
        }, 500);

    });

    $(".js--scroll-to-start").click(function () {

        $("html,body").animate({
            scrollTop: $(".js--section-features").offset().top
        }, 100);

    });

    // Scrolling Animations

    $(".js--wp-1").waypoint(function (direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    $(".js--wp-2").waypoint(function (direction) {
        $(".js--wp-2").addClass("animated fadeInUpBig");
    }, {
        offset: "85%"
    });

    $(".js--wp-3").waypoint(function (direction) {
        $(".js--wp-3").addClass("animated fadeInRightBig");
    }, {
        offset: "85%"
    });


    $(".js--wp-4").waypoint(function (direction) {
        $(".js--wp-4").addClass("animated fadeIn");
    }, {
        offset: "75%"
    });

    $(".js--wp-5").waypoint(function (direction) {
        $(".js--wp-5").addClass("animated pulse");
    }, {
        offset: "75%"
    });

});


//MOBILE NAVIGATION
$(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
        icon.removeClass("ion-navicon-round");
        icon.addClass("ion-close-round");
    } else {
        icon.removeClass("ion-close-round");
        icon.addClass("ion-navicon-round");
    }
});
