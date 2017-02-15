define(['tab','jquery'], function(tab,$) {//第一屏tab标签变体，此模块依赖tab模块
	var hidetab= function(tab1){
		var tab1Title = tab1.children('div').eq(0).children('ul').eq(0).children('li');
		var tab1Con = tab1.children('div').eq(1).children('div');
		tab1.parent().children('div').eq(0).children('a').hover(function() { //鼠标hover第一排的4个元素时
			var num = $(this).index(); //获取元素的索引值
			if (num < 4) {
				tab1.css("display", "block"); //显示tab
				tab1Title.eq(num).addClass("tabon").siblings().removeClass("tabon"); //按照索引值显示tab中相应的title
				tab1Con.eq(num).css("display", "block").siblings().css("display", "none"); //按照索引值显示相应的content
				tab1Title.eq(num).mouseleave(function() { //鼠标离开title时，去掉其tabon的状态
					tab1Title.removeClass("tabon");
				})
			}
			tab.tab(tab1, "tabon");//此模块依赖tab模块
			tab1.mouseleave(function() { //鼠标离开tab时，将tab隐藏
				tab1.css("display", "none");
			})
		})
	};
	return{
		hidetab:hidetab
	}
})