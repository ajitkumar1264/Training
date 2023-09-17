console.log("working")

$(document).ready(function()
{
    // $(".btn").click(function()
    // {
    //     $("div").load("demo.txt #p1")
    
    // })

    $(".btn").click(function()
    {
        $("div").load("dem.txt",function(responseTxt,statusTxt,xhr)
        {
            if(statusTxt =="success")
            {
                alert("External content load successfuly")
            }
            if(statusTxt == "error")
            {
                alert("Error : "+xhr.status+" : "+xhr.statusText);
            }
        })
    })

    $(".btn").click(function()
    {
        $.get("")
    })
})