function scrollDown() {
	$(".hero-bottom-container").click(function() {
		console.log("hei");
	    $('html,body').animate({
	        scrollTop: $(".background-container").offset().top},
	        'slow');
	});
}

scrollDown();

function changeHeightNavBar() {

$(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.hero-unit').offset().top; // pixels to the top of div1
        var ht = $('.hero-unit').height(); // height of div1 in pixels
        //if you have scrolled past div
        if (scroll > os + ht) {
            $('.nav-section-container').addClass('scrolled');
        }
 });

}
changeHeightNavBar();

function mobileNav() {

    $(".hamburger-button-container").click(function() {
        $(this).css("display", "none");
        $('.main-nav').css("display", "flex");
        $('.x-out-container').css("display", "flex");
        $('.x-out').css("display", "flex");
        $('.nav-section-container').addClass("nav-open");
    });

    $(".x-out-container").click(function() {
        $(this).css("display", "none");
        $('.main-nav').css("display", "none");
        $('.hamburger-button-container').css("display", "flex");
        $('.nav-section-container').removeClass("nav-open");
    });


}

 mobileNav();
