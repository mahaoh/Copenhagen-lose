/**
 * Created by 梨涡浅笑 on 2017/8/23.
 */
$(function(){
    $('.h-left').click(function(){
        window.history.go(-1);
    })
    var head = $('.header');
	$(window).scroll(function() {
		var iTop = $(window).scrollTop();
		if(iTop >= $('.recipe>h2').height()) {
			head.css({
				background:"rgba(248,85,66,0.5)",
				color:"#fff"
			})
		} else {
			head.css({
				background:"transparent",
				color:"#fff"
			})
		}
	});
})