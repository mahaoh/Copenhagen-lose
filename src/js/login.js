/*
* @Author: Marte
* @Date:   2017-08-22 11:46:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-22 20:56:10
*/

$(function(){
     // $('.landing').attr('disabled','disabled')
     $(".shouji").focus(function(){
          $('.landing').removeAttr("disabled");
          $('.tishi').hide();
     });



     $('.landing').click(function(){
        var ipsval=$('.shouji').val();
        console.log(ipsval)
        var reg=/^1[34578]\d{9}$/;
        if(reg.test(ipsval)){
            var yanzheng=ipsval.slice(-4);
            localStorage.setItem('zheng',JSON.stringify(yanzheng))
            window.location.href="../html/xiayibu.html";
    }else{
        $('.tishi').show();
        }




})
     $('.return').click(function(){
         window.history.go(-1);
     })

     $('.shouji').focus(function(event) {
         /* Act on the event */
         $('.logo_img').slideUp(800);
     });
     $('.shouji').blur(function(event) {
         /* Act on the event */
         $('.logo_img').slideDown(800);
     });
     $('.register').click(function(){
        window.location.href="../html/register.html";
     })
})