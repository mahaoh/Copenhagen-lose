$(function(){
	$('.h-left').click(function(){
		window.history.go(-1);
	})
    var name_data=localStorage.getItem('name');
    $('#name').html(JSON.parse(name_data));
})