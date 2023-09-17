console.log("working")

$(document).ready(function()
{
    $(".btn").click(function()
    {
        $("div").load("demo.txt")
    
    })
})