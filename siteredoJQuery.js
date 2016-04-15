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

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('#animate').stop()
};

var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

$(function($) {
    if (!isMobile.any())
    $('#animate').stop('spaceship');
});
