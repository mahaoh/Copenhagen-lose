/*
* @Author: Marte
* @Date:   2017-08-22 15:47:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-22 22:56:25
*/

$(function(){
    var data =localStorage.getItem('zheng');
    var count=59;
            $('.xinxi').css('animation-name',"donghua");
            $('.xinxi span').html('你的哥本哈根验证码：'+data+'!请在60s内输入')
    var id=setInterval(function(){
        $('.coun').text(count+'s后重新获取');
        count--;
        if(count==0){
            $('.coun').text('请重新获取验证码')
            clearInterval(id);
        }
    },1000)

    $('.wancheng').click(function(){
        var yan=$('.yanma').val();
        var mi=$('.mima').val();
        var data_val=data.split('"');
        var reg=/^[a-zA-Z]\w{5,15}$/;
        if(yan!=data_val[1] || reg.test(mi)&&yan=='' ||mi==""){
            alert('验证码或密码不正确')
    }else{
        window.location.href="../html/personage.html"
    }
})

$('.return').click(function(){
     window.history.go(-1);
})
})