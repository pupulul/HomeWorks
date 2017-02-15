define(function() {
	var topHide = function(win,top) {
		win.on("scroll", function() { //监测鼠标滚动事件，页面处于顶部时隐藏"返回顶部"，鼠标滚动时显示"返回顶部"
			var scrollHight = win.scrollTop();
			if (scrollHight == 0) {
				top.hide();
			} else {
				top.show();
			}
		})
	};
	return {
		topHide: topHide
	}
})