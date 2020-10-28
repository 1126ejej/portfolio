$(document).ready(function(){
    $(".b01 > .mark").click(function(){
        $("div.b01").removeClass("on");
        $("div.b02").removeClass("on");
        $("div.b03").removeClass("on");
    });
    $(".b02 > .mark").click(function(){
        $("div.b02").removeClass("on");
        $("div.b03").removeClass("on");
        $('div.b01').addClass("on");
    });
    $(".b03 > .mark").click(function(){
        $("div.b03").removeClass("on");
        $("div.b02").addClass("on");
        $("div.b01").addClass("on")
    });
    $(".b04 > .mark").click(function(){
        $(".b01, .b02, .b03").addClass("on")
    })
});