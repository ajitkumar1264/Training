console.log("working");

// $(document).ready(function()
// {
//     // $(".btn").click(function()
//     // {
//     //     $("div").load("demo.txt #p1")

//     // })

//     // $(".btn").click(function()
//     // {
//     //     $("div").load("dem.txt",function(responseTxt,statusTxt,xhr)
//     //     {
//     //         if(statusTxt =="success")
//     //         {
//     //             alert("External content load successfuly")
//     //         }
//     //         if(statusTxt == "error")
//     //         {
//     //             alert("Error : "+xhr.status+" : "+xhr.statusText);
//     //         }
//     //     })
//     // })

    $(".btn").click(function()
    {
        // $(".pclass").load("https://randomuser.me/api/",function(data,status)
        
        $.get("https://randomuser.me/api/",function(data,status)
        {
            if(status=="success")
            {
                console.log(data,status);
                $(".pclass").html(data);
            }
            if(status=="error")
            {
                console.log('error',error.message)
            }
        })
    })

//     $(".btn").click(function()
//     {
//         $.post("https://echo.hoppscotch.io",{
//             name:"nano",
//             email:"fiekadkfj@gmail.com"
//         },
//         function(data,status){
//             console.log(data,status);
//         })
//     })
// })

// var JQuery=$.noConflict();
// JQuery(document).ready(function()
// {
//     jQuery(".btn").click(function()
//     {
//         jQuery("p").text("Ajax confilict is working here");
//     })
// })
// var JQuery=$.noConflict();
// JQuery(document).ready(function($)
// {
//     $(".btn").click(function()
//     {
//         $("p").text("Ajax confilict is working here");
//     })
// })

// $(document).ready(function () {
//   $(".btn1").click(function () {
//     $.ajax({
//       url: "Ajaxdoc.txt",
//       success: function (result) {
//         $(".pclass").text(result);
//       }
//     });
//   });
// });
$(document).ready(function () {
  //   $(".btn1").click(function () {
  //     $.ajaxSetup({
  //       url: "Ajaxdoc.txt",
  //       success: function (result) {
  //         $(".pclass").text(result);
  //       }
  //     });
  //     $.ajax();
  //   });


  $(document).ajaxStart(function()
  {
      $("#wait").css({"diplay":"block"})
  })
  $(document).ajaxComplete(function(){
      $("#wait").css({"diplay":"none"})
  })



  $(".btn1").click(function () {
    // $.get("Ajaxdoc.txt",function(data,status){
    //     alert("data :"+data+"\nstatus : "+status);
    // })

    // $.getJSON("Ajax.json", function (result) {
    //   $.each(result, function (i, filed) {
    //     $("p").text(filed);
    //   });
    // });

    // presonObj=new Object();
    // presonObj.name="ajitkumar";
    // presonObj.lastname="vaghela";
    // presonObj.age=50;

    // $("p").text($.param(presonObj))


 


    
  });
});
