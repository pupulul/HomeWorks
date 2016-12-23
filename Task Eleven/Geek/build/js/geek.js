require.config({
	baseUrl: 'js/app/',
	paths: {
		jquery: "../tool/jquery-3.0.0.min"
	}
});

require(['hover-ec1a938e5d','tab-b4b55586da'],function(){

})

require(['swiper-c789a0c2cc','jquery'], function(swiper,$) { //轮播图
	var swiper1 = $(".swiper1");
	var swiper2 = $(".swiper2");
	var swiper3 = $(".swiper3");
	var swiper4 = $(".swiper4");
	var swiper5 = $(".swiper5");
	swiper.swiper(swiper1, true, 1, '-65px');
	swiper.swiper(swiper2, false, 3, '-52px');
	swiper.swiper(swiper3, false, 6, '-65px');
	swiper.swiper(swiper4, false, 7, '-65px');
	swiper.swiper(swiper5, false, 6, '-65px');
})

