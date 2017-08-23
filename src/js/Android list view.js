var loadFlag = true;
	var oi = 0;
	var mySwiper = new Swiper('.view',{
		direction: 'vertical',
		scrollbar: '.swiper-scrollbar',
		slidesPerView: 'auto',
		mousewheelControl: true,
		freeMode: true,
		onTouchMove: function(swiper){		//手动滑动中触发
			var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
            
            
            if(mySwiper.translate < 50 && mySwiper.translate > 0) {
				$(".init-loading").html('下拉刷新...').show();
			}else if(mySwiper.translate > 50 ){
				$(".init-loading").html('释放刷新...').show();
			}
		},
		onTouchEnd: function(swiper) {
			var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
             // 上拉加载
            if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
                // console.log("已经到达底部！");
               
                if(loadFlag){
                	$(".loadtip").html('正在加载...');
                }else{
                	$(".loadtip").html('没有更多啦！');
                }
                
                setTimeout(function() {
                    for(var i = 0; i <6; i++) {
                    	oi++;
                        $(".list-group").append('<a href="#"><img src="../images/find-imgs/images/find_25.png" /></a>');
                    }
                     $(".loadtip").html('上拉加载更多...');
                    mySwiper.update(); // 重新计算高度;
                }, 800);
            }
            
            // 下拉刷新
            if(mySwiper.translate >= 50) {
                $(".init-loading").html('正在刷新...').show();
                $(".loadtip").html('上拉加载更多');
                loadFlag = true;
                
                setTimeout(function() {
                    $(".refreshtip").show(0);
                    $(".init-loading").html('刷新成功！');
                    setTimeout(function(){
                    	$(".init-loading").html('').hide();
                    },800);
                    $(".loadtip").show(0);
                    
                    //刷新操作
                    mySwiper.update(); // 重新计算高度;
                }, 1000);
            }else if(mySwiper.translate >= 0 && mySwiper.translate < 50){
            	$(".init-loading").html('').hide();
            }
            return false;
		}
	});