function scrollDown() {
	$(".hero-bottom-container").click(function() {
		console.log("hei");
	    $('html,body').animate({
	        scrollTop: $(".background-container").offset().top},
	        'slow');
	});
}

scrollDown();
