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
    $('.my_width').children().eq(0).click(function(){
        window.location.href='../html/recipe.html';
    })
    $('.my_width').children().eq(1).click(function(){
        window.location.href='../html/red_recipe.html';
    })
    $('.my_width').children().eq(2).click(function(){
        window.location.href='../html/orange_recipe.html';
    })
    $('.imgs').on('click','li:eq(0)',function(){
        window.location.href='../html/recipe.html';
    }).on('click','li:eq(1)',function(){
        window.location.href='../html/red_recipe.html';
    }).on('click','li:eq(2)',function(){
        window.location.href='../html/orange_recipe.html';
    })
})