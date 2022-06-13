$(function(){
  $(".vertical-slider").slick({
      arrow:false,
      dots:true,
      edgeFriction:5,
      infinite:false,
      vertical:true,
      verticalSwiping:true,
  });
  $(".vertical-slider").mousewheel(function(e) {
      if (e.deltaY < 0) {
        if($(this).slick("slickCurrentSlide") == $(this).find(".slide").length - 1) {
          return
        }
        
        e.preventDefault()
        $(this).slick("slickNext")
      } else {
        if($(this).slick("slickCurrentSlide") == 0) {
          return
        }
        
        e.preventDefault()
        $(this).slick("slickPrev")
      }
      
      
    });
  });
$(function(){
  var angle = 0;
  $(".vertical-slider").mousewheel(function(e) {
    if(e.deltaY < 0){
      $(".slick-dots").css("transform","rotate("+angle+"deg)")
      angle += +90;
    }
    if(e.deltaY > 0){
      $(".slick-dots").css("transform","rotate("+angle+"deg)")
      angle += -90;
    }
  })
})