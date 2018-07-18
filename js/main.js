$(".next-page").hide();
$(".expert-login").hide();
$(".admin-login").hide();
// $(".size").hide();

$(".e2").mouseover( ()=> {
    $(".e3").css("text-decoration", "line-through").delay(2000);
});
$(".e2").mouseleave( () => {
    $(".e3").css("text-decoration", "none");
});

$(".e2").click( function(){
    $(".size").addClass('animated fadeOut');
     setTimeout(() => {
         $(".size").hide();
        $(".next-page").show(1000);
     }, 900);
    // $(".size").addClass('animated fadeOut');
});


        //**********gun Transition*************/
$(".img1").mouseover(() => {
    $(".gun").css("transform", "rotate(200deg) translate(300px, -300px)");
    $(".fix").css("transform", "skewY(-9deg) translate(-30px, -30px)");
    $(".img-box").css("transform", "skewY(-9deg)");
});
$(".img1").mouseleave(() => {
    $(".gun").css("transform", "rotate(90deg)");
    $(".fix").css("transform", "skewY(-2deg) translate(0px, 0px)");
    $(".img-box").css("transform", "skewY(-2deg)");

});

$(".img2").mouseover(() => {
    $(".gun").css("transform", "rotate(200deg) translate(-70px, -200px)");
    $(".fix").css("transform", "skewY(-11deg) translate(-40px, -40px)");
    $(".img-box").css("transform", "skewY(-11deg)");
});
$(".img2").mouseleave(() => {
    $(".gun").css("transform", "rotate(90deg)");
    $(".fix").css("transform", "skewY(-2deg) translate(0px, 0px)");
    $(".img-box").css("transform", "skewY(-2deg)");

});

$(".join-box").mouseover(() => {
    $(".gun").css("transform", "rotate(30deg) translate(-100px, -50px)");
    $(".join-box").css("transform", "skewY(15deg) translate(30px, -30px)");
    $(".join-box").css("background-color", "rgba(255, 255, 255, 0.05)");
    $(".join-box").css("border-radius", "50px");
    $(".soldier").css("transform", "skewY(5deg) translate(-60px, 60px)");
    $(".soldier").css("bow-shadow", "6px 14px 10px rgba(255, 255, 255, 0.2)");
    $(".soldier").css("border", "solid 1px rgba(255, 255, 255, 0.2");
    $(".dummy1").css("font-size", "1rem");
    $("dummy2").css("font-size", "0.5px");
});

$(".join-box").mouseleave(() => {
    $(".gun").css("transform", "rotate(90deg)");
    $(".join-box").css("transform", "skewY(0deg)");
    $(".join-box").css("background-color", "rgba(255, 255, 255, 0.2)");
    $(".join-box").css("transform", "translate(0px, 0px)");
    $("h2").css("font-size", "1.4rem");
    $(".soldier").css("transform", "skewY(0deg)");
    $(".soldier").css("transform", "translate(0px, 0px)");
    $(".soldier").css("border", "none");
    $(".dummy1").css("font-size", "1.6rem");
    $("dummy2").css("font-size", "1rem");
});


        // **************login************
$(".i2").click( ()=> {
    $(".next-page").addClass('animated fadeOut');
    $(".next-page").hide();
    setTimeout( ()=>{
        $(".expert-login").show(2000);
    }, 500);
});

$(".i1").click(() => {
    $(".next-page").addClass('animated fadeOut');
    $(".next-page").hide();
    setTimeout(() => {
        $(".admin-login").show(2000);
    }, 500);
});