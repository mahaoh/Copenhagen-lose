
$(function(){
     $(".shouji").focus(function(){
        $('.logo_img').slideUp(800);
        $('.tishi').hide();
     });
     $(".shouji").blur(function(){
        $('.logo_img').slideDown(800);
     });
     $('.mima').focus(function(){
        $('.logo_img').slideUp(800)
     })

     $('.mima').blur(function(event) {
         /* Act on the event */
         $('.logo_img').slideDown(800);
     });
$('.return').click(function(){
    window.history.go(-1);
})
$('.register').click(function(){
    window.location.href="../html/login.html";
})
   var yanzheng=null;
    $('#huoqu').click(function(){
        var shouji_val=$('.shouji').val()
          var reg=/^1[34578]\d{9}$/;
        if(reg.test(shouji_val)){
             yanzheng=shouji_val.slice(-4);
             $('.xinxi').css('animation-name',"donghua");
            $('.xinxi span').html('你的哥本哈根验证码：'+yanzheng+'!请在60s内输入')
            var count=59;
             var id=setInterval(function(){
        $('#huoqu').text(count+'s后重新获取');
        count--;
        if(count==0){
            $('#huoqu').text('请重新获取验证码')
            clearInterval(id);
        }
    },1000)

    }else{
        $('.tishi').show();
        }
    })

    $('.landing').click(function(){
         if($('.mima').val()!=yanzheng){
            alert('验证码不正确，请重新输入')
        }else{
            window.location.href="../html/personage.html";
        }
    })
})
