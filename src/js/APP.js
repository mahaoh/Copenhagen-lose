/*
* @Author: Marte
* @Date:   2017-08-21 09:09:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-22 19:24:04
*/

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
$('.register').click(function(event) {
    /* Act on the event */
     window.location.href="html/register.html";
});
$('.go').click(function(){
    window.location.href="html/login.html";
})