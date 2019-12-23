$(document).ready(function(){

    $(".menu i").on("click", function(e){
        e.preventDefault();
        $("#nav-mobile").toggleClass("open");
    })
    $("#close-nav").on("click", function(e){
        e.preventDefault();
        $("#nav-mobile").removeClass("open");
    })

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    });

    $("#backTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
     });
});