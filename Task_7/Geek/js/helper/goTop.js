define(function($) {//返回顶部
	var goTop = function(top,win) {
		top.hide();
		top.click(function() {
			win.scrollTop(0);
		})
	};
	return{
		goTop:goTop
	}
})