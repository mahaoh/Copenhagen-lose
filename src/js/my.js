var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "#0693cd";
ctx.arc(150, 150,140, 0, Math.PI*1.8);
ctx.stroke();
$(function(){
	var head = $('.header');
	$(window).scroll(function() {
		var iTop = $(window).scrollTop();
		if(iTop >= $('.info-top>ul>li:first-child').height()) {
			head.css({
				background:"#0194d1",
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
