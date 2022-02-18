//javascript
//by ID
//document.getElementById("menu").style.display="none";
//by Tage
//let p=document.getElementsByTagName("p");
//for(let i=0;i<8;i++){
    //p[i].style.display="none";
   // document.getElementsByTagName("p")[i].style.display="none";
//}
//by Class
//let items=document.getElementsByClassName("menu-item");
//for(let i=0;i<items.length;i++){
    //items[i].style.display="none";
    

//jquery
//$("#menu").hide();
//$("p").hide();
//$(".menu-item").hide();

//simple exercise
$("navegacion").hide();

$("#menu").click(function(){
    console.log("click");
    $("navegacion").show();
    $("#menu").hide();
});
// .---> class
// # ----> ID
// p ---> tagname

//click on the menu and hide the logo
$(".logo").click(function(){
    $(this).hide();
});

$("div.logo img").on("mouseenter",function(){
    $(this).addClass("test");
});
$("div.logo img").on("mouseleave", function(){
    $("div.logo img").removeClass("test");
})

//$("article:first h2").text("this is a text")
$("article:first h2").html("<h1>this is a text</h1>")

$("article:first p:last").addClass("test");
$("article:first p:last").removeClass("test");