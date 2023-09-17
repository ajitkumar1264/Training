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
    
    // $(".btn").click(function () {
    //   $("p").animate({left:'toggle'},5000);
    // });
    // $(".btn1").click(function () {
    //   $("p").stop();
    // });


//     here this alert message show after the effect is complited
//     // $(".btn1").click(function () {
//     //   $("p").hide("slow",function(){
//     //     alert("paragraph is not-visible");
//     //   });
//     // });

// here the alert message show before event is completed
//     $(".btn1").click(function () {
//       $("p").hide(1000);
//       alert("paragraph is not-visible");
//     });
//     

// $(".btn1").click(function () {
//      $("p").css("color","red").slideUp(2000).slideDown(2000);
//     });

// $(".btn").click(function(){
//   alert("Text : " + $("p").text());
// });

// $(".btn1").click(function(){
//   alert("Text : " + $("p").html());
// });

// // $(".btn2").click(function(){
// //   alert("Text : " + $("p").val());
// // });

// $(".btn2").click(function(){
//   alert("Text : " + $("p").attr("class"));
// });




// $(".btn").click(function(){
//   alert("Text : " + $("p").text("vaghela  hardikbhai"));
// });

// $(".btn1").click(function(){
//   alert("Text : " + $("p").html("<h1>jyotiben</h1>"));
// });

// $(".btn2").click(function(){
//   alert("Text : " + $("p").val());
// });

// $(".btn2").click(function(){
//   alert("Text : " + $("p").attr("class","hardik"));
// });

// $(".btn").click(function(){
//   $("p").append("some appended text.")
// })
// $(".btn1").click(function(){
//   $("p").prepend("Some text is prepend before the content.")
// })
// $(".btn2").click(function(){
//   $("p").after("some text is written after the line.")
// })
// $(".btn3").click(function(){
//   $("p").before("some text is written before the line the line.")
// })


// $(".remove").click(function(){
//   $(".box").remove();
// })
// $(".empty").click(function(){
//   $(".box").empty();
// })


// $(".btn").click(function(){
//   $("p").addClass("box1");
// })

// $(".btn1").click(function(){
//   $("p").removeClass("box");
// })

// $(".btn2").click(function(){
//   $("p").toggleClass("box");
// })


// $(".btn").click(function(){
//    $("p").css({"font-size":"20px","color":"red"});
// })
   
// $(".widhei").click(function(){
//   var txt="";
//   txt+="the width of the box : "+$(".dimension").width() + "</br>";
//   txt+="the height of the box : "+$(".dimension").height();
//   $(".hw").html(txt);

// })

// $(".widhei").click(function(){
//   var txt="";
//   txt+="the width of the box : "+$(".dimension").innerWidth() + "</br>";
//   txt+="the height of the box : "+$(".dimension").innerHeight();
//   $(".hw").html(txt);

// })

// $(".widhei").click(function(){
//   var txt="";
//   txt+="the width of the box : "+$(".dimension").outerWidth() + "</br>";
//   txt+="the height of the box : "+$(".dimension").outerHeight();
//   $(".hw").html(txt);
// })

// $(".btn").click(function()
// {
//     $("span").parent().css({"color":"red","border":"2px solid red"})
// })

// $(".btn1").click(function()
// {
//     $("span").parents().css({"color":"red","border":"2px solid red"})
// })

// $(".btn2").click(function()
// {
//     $("span").parentsUntil("p").css({"color":"red","border":"2px solid red"})
// })

// $(".btn").click(function()
// {
//     $("p").childeren().css({"color":"red","border":"2px solid red"})
// })

// $(".btn").click(function()
// {
//     $("div").children("p.second").css({"color":"red"})
//     alert("this is very long");
// })

// $(".btn1").click(function()
// {
//     $("p").find("span").css({"color":"red"})
// })

// $("btn").click(function()
// {
//     $("h1").siblings("h2").css({"color":"red"});
// })

// $(".btn").click(function()
// {
//     $("div").first().css({"color":"green"});
// })
// $(".btn").click(function()
// {
//     $("div").last().css({"color":"green"});
// })
// $(".btn").click(function()
// {
//     $("div").eq(1).css({"color":"red"});
// })

// $(".btn").click(function()
// {
//     $("div").eq(1).css({"color":"red"});
// })

// $(".btn").click(function()
// {
//     $("div").filter(".box").css({"color":"red"});
// })
$(".btn").click(function()
{
    $("div").not(".car").css({"color":"red"});
})

  });