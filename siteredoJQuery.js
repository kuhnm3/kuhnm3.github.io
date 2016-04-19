$(document).on('click', '.menu-btn', function(){
  $(".nav-links").toggle();
})

$(document).on('click', '.menu-btn', function(){
  $(".name-title").toggle();
})

$(document).ready(function(e) {

  var width = "+=" + 
  $(document).width();

  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    ;
  }else{
    $("#animate").animate({
      left: width,
      bottom:width, 
    }, 4000);
  }
});

