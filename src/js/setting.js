$(function(){
	var head = $('.header');
	$(window).scroll(function() {
		var iTop = $(window).scrollTop();
		console.log(iTop)
		if(iTop >= $('.mcono-top img').height()) {
			head.css({
				background:"#fff",
				color:"#000"
			})
		} else {
			head.css({
				background:"transparent",
				color:"#fff"
			})
		}
	});
})