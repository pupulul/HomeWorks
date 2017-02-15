require.config({
	baseUrl: 'js/helper',
	paths: {
		jquery: "jquery-3.0.0.min"
	}
});
require(['jquery'], function($) { //引入jQuery
	console.log($().jquery);
})
require(['swip','jquery'], function(swip,$) { //轮播图
	var swiper1 = $(".swiper1");
	var swiper2 = $(".swiper2");
	var swiper3 = $(".swiper3");
	var swiper4 = $(".swiper4");
	var swiper5 = $(".swiper5");
	swip.swiper(swiper1, true, 1, '-65px');
	swip.swiper(swiper2, false, 3, '-52px');
	swip.swiper(swiper3, false, 6, '-65px');
	swip.swiper(swiper4, false, 7, '-65px');
	swip.swiper(swiper5, false, 6, '-65px');
})

require(['hidetab','jquery'], function(hidetab,$) { //第一屏tab标签变体
	var tab1 = $(".tab").eq(0);
	hidetab.hidetab(tab1);
})

require(['tab','jquery'], function(tab,$) { //第二屏tab标签
	var tab2 = $(".hot-tab").eq(0);
	tab.tab(tab2, "hltabOn");
})

require(['topHide','jquery'], function(topHide,$) { //鼠标滚动时显示top，页面位于窗口顶部时隐藏top
	var win=$(window);
	var top=$(".top")
	topHide.topHide(win,top);
})

require(['goTop','jquery'], function(goTop,$) { //返回顶部
	var win=$(window);
	var top=$(".top")
	goTop.goTop(top,win);
})