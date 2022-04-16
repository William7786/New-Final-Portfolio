
(function ($) {
    "use strict"; //Start of use strict

    //Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$(document).ready(function(){
    flag=1;
     $(".next").click(function(){
        if(flag==0)
         {
             $("#first").css("z-index","999");
             $("#second").css("z-index","9");
             $("#third").css("z-index","9");
             $("#first").css("transform","translateX(0px) scale(1.5)");
             $("#second").css("transform","translateX(-100px) scale(1)");
             $("#third").css("transform","translateX(100px)");
             flag=1;
         }
         else if(flag==1)
         {
             $("#third").css("z-index","999");
             $("#second").css("z-index","9");
             $("#first").css("z-index","9");
             $("#third").css("transform","translateX(0px) scale(1.5)");
             $("#first").css("transform","translateX(-100px) scale(1)");
             $("#second").css("transform","translateX(100px)");
             flag=2;
         }
         else if(flag==2)
         {
             $("#second").css("z-index","999");
             $("#third").css("z-index","9");
             $("#side1").css("z-index","9");
             $("#second").css("transform","translateX(0px) scale(1.5)");
             $("#third").css("transform","translateX(-100px) scale(1)");
             $("#first").css("transform","translateX(100px)");
             flag=0;
         }
     });
   
 });
