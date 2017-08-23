/*
* @Author: Marte
* @Date:   2017-08-22 11:52:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-23 09:41:00
*/

    var mySwiper = new Swiper ('.main_banner', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween:25
        })
        var myBanner = new Swiper ('.banner', {
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay:5000
        })
        $(function(){
            $('.btn_href').click(function(){
                window.location.href='add_target.html';
            })
            $('.main_img').children().eq(0).click(function(){
                window.location.href='recipe.html';
            })
        })