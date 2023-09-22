console.log("the name is enough")

$(document).ready(function()
{
     $(".sum").click(function(){
        

      
        var fname=$("#fname").val().trim();
        var lname=$("#lname").val().trim();
        
        var email=$("#email").val().trim();
        var address=$("#address").val().trim();
        var number=$("#number").val().trim();
    
        $.post("https://echo.hoppscotch.io",{
          fname:fname,
          lname:lname,
          email:email,
          address:address,
          number:number
        },function(data,status){

         alert("data successfully added")
         console.log(data);
        })
        $.get("https://echo.hoppscotch.io",function(data,status){

         alert("data successfully added")
         console.log(data);
        })
        

     })
})