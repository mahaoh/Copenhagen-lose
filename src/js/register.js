/*
* @Author: Marte
* @Date:   2017-08-21 20:16:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-22 11:01:52
*/
    $('.quan').click(function(eve){
        $('.logo_img').slideDown(800);

     })
     $(".shouji").focus(function(){
        $('.logo_img').slideUp(800);
        return false;
     });
     $('.mima').focus(function(){
        $('.logo_img').slideUp(800)
     })
       // $(".shouji").unbind( "click" );

$('.return').click(function(){
    window.history.go(-1);
})