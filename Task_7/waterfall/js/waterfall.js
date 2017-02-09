
$(document).ready(function(){
	console.log($(document).ready);
	// 监听屏幕加载
	$(window).on("load",function(){
		// 图片定位方法
		imgLocation();
		// 建立一个后备图片合集
		var imgs = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"5.jpg"},{"src":"9.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},]};
		// 屏幕滚动时
		window.onscroll = function(){
			// 屏幕滚动方法，如果需要加载
			if(scrollside()){
				// 遍历后备图片合集
				$.each(imgs.data,function(index,value){
					// 建立一个新的盒子div
					var box = $("<div>").addClass("box").appendTo($(".container"));
					// 建立新的contentdiv
					var content = $("<div>").addClass("content").appendTo(box);
					// 将后备图片合集中的图片加入content
					$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
				});
				// 对新加入的图片进行定位
				imgLocation();
			}
		};
	});
	$(window).on("resize",function(){
		imgLocation();
	});
});




// 屏幕滚动方法
function scrollside() {
	// 建立一个对象，是盒子类的集合
    var box = $(".box");
    // 得到最后一个图片的高度的一半加上最后一个图片到顶部的距离的和
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    // 得到屏幕的高度
    var documentHeight = $(document).height();
    // 得到屏幕滚动的距离
    var scrollHeight = $(window).scrollTop();
    // 如果最后一个盒子的高度小于屏幕高＋滚动距离，则加载，否则不加载
    return (lastboxHeight < scrollHeight + documentHeight);
}

// 图片定位方法
function imgLocation(){
	// 建立一个对象，是盒子类的集合
	var box = $(".box");
	// 获取其中一个盒子的宽度
	var boxWidth =box.eq(0).width();
	// 得到一行能放多少盒子
	var num =Math.floor( $(window).width()/boxWidth);
	// 建立一个数组存储盒子高度
	var boxArr=[];
	// 遍历盒子对象
	box.each(function(index,value){
		value.style.cssText="";
		// 得到每一个盒子对象的高度
		var boxHeight = box.eq(index).height();
		// 如果是第一行
		if(index<num){
			// 将盒子对象的高度存入数组
			boxArr[index]=boxHeight;
		//如果不是第一行 
		}else{
			// 找出盒子高度集合中的最小数
			var minboxHeight =Math.min.apply(null,boxArr);
			// 找出最小数在盒子对象的位置
			var minboxIndex=$.inArray(minboxHeight,boxArr);
			// 改变样式，将盒子插入到最小数的盒子下面
			$(value).css({
				"position":"absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left
			});
			// 将盒子高度集合中的最小数高度加上新插入盒子的高度
			boxArr[minboxIndex]+=box.eq(index).height();
		}
	});
}