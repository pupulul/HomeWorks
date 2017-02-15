define(function() {//tab标签
	var tab = function(tab, tabon) {
		var tittle = tab.find('div').eq(0).find('ul').eq(0).find('li')
		var tabct = tab.children('div').eq(1).children('div')
		var index;
		tittle.hover(function() {
			index = $(this).index();
			$(this).addClass(tabon).siblings().removeClass(tabon);
			tabct.eq(index).css("display", "block").siblings().css("display", "none");
		})
	};
	return {
		tab: tab
	};
})