$(document).on('click', '.menu-btn', function(){
  $(".nav-links").toggle();
})

$(document).ready(function(e) {
    var width = "+=" + 
    $(document).width();
    $("#animate").animate({
    left: width,
    bottom:width,  
  }, 4000, function() {
    // Animation complete.
  });
});