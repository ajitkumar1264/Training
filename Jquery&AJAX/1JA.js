$(document).ready(function () {
    // $(".btn").click(function () {
    //   $("p").toggle(1000);
    // });
    // $(".btn1").click(function () {
    //   $("p").hide(1000);
    // });
    // $(".btn2").click(function () {
    //   $("p").show(1000);
    // });


    // $(".btn").click(function () {
    //   $("p").fadeToggle(1000);
    // });
    // $(".btn1").click(function () {
    //   $("p").fadeIn(1000);
    // });
    // $(".btn2").click(function () {
    //   $("p").fadeOut(1000);
    // });
    // $(".btn3").click(function () {
    //   $("p").fodeTo("slow",0.1);
    // });

    // $(".btn").click(function () {
    //   $("p").slideToggle(1000);
    // });
    // $(".btn1").click(function () {
    //   $("p").slideUp(1000);
    // });
    // $(".btn2").click(function () {
    //   $("p").slideDown(1000);
    // });
    
    $(".btn").click(function () {
      $("p").animate({left:'toggle'},5000);
    });
    $(".btn1").click(function () {
      $("p").stop();
    });
   
  });