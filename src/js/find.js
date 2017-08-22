$(function(){
	var swiper = new Swiper('.m-banner', {
	    pagination: '.swiper-pagination',
	    slidesPerView: 1,
	    paginationClickable: true,
	    spaceBetween: 30,
	    loop: true
	});
    var swiper1 = new Swiper('.m-details', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });
	var swiper2 = new Swiper('.m-share', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });
})
