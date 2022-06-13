$(document).ready(function(){
    if($(window).width()<641){
        $("nav").css("position","relative");
        $("div.circle>span").hide();
        $("div.circle>img").click(function(){
            $(this).siblings().slideToggle().not(this).parent("div.circle").siblings().children("span").slideUp();
            // $("#"+$(this).data('id')).fadeIn().siblings().next().fadeOut();
        $("div.swiper-container").addClass("swipe2").removeClass("swipe1");
    });
}
});
$(function($){
    $("div.back").vegas({
    slides: [
        { src:"../images/donghwa/BG_02.jpg" , delay:3000 },
        { src:"../images/donghwa/BG_03.jpg" , delay:3000 },
        { src:"../images/donghwa/BG_04.jpg" , delay:3000 },
        { src:"../images/donghwa/BG_05.jpg" , delay:3000 },
        { src:"../images/donghwa/BG_06.jpg" , delay:3000 }
    ],
    transition: 'fade'
    })
});
$(document).ready(function(){
    if($(window).width()>640){
    $(window).scroll(function(){
        if($(document).scrollTop()>650){
            $("nav").css("background-color","rgba(0,0,0,0.7)",);
        }
        if($(document).scrollTop()<649){
            $("nav").css("background-color","rgba(0,0,0,0)")
        }
    })
    }
})