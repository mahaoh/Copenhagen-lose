/*
* @Author: Marte
* @Date:   2017-08-22 19:57:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-23 14:41:58
*/

$(function(){
    $('.go_xia').click(function(){
        localStorage.setItem('name',JSON.stringify($('.name').html()))
        window.location.href="../html/scheme.html";
    })



})