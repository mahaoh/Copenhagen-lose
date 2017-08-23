$(function(){
	$('.h-left').click(function(){
		window.history.go(-1);
	})
	$('.log-off_btn').click(function(){
		window.location.href = "register.html";
	})
    var name_data=localStorage.getItem('name');
    $('#name').html(JSON.parse(name_data));
})