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
	$('.h-right').click(function(){
		window.location.href = "set.html";
	})

	var name_data=localStorage.getItem('name');
	$('.h-title').html(JSON.parse(name_data));
})
