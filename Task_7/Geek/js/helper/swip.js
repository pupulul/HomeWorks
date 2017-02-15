define(function($) {//轮播图
	var swiper = function(selector, autoplay, number, position) {
		var i = 0;
		var imgList = selector.find('ul').eq(0);
		var dotList = selector.find('ul').eq(1);
		var size = imgList.find('li').length; //获取imgList中图片的数量
		var width = imgList.find('li').width();
		var button = selector.find('div');
		var clone;
		for (var j = 0; j < number; j++) {
			clone = imgList.find('li').eq(j).clone(); //复制第一张图片
			imgList.append(clone); //将复制的第一张图片加到最后一张图片后，以实现无缝轮播	
		}
		if (autoplay == true) { //如果autoplay==true，设置定时器
			var timer = setInterval(function() {
				i++;
				move();
			}, 2000);
		}
		selector.find('div').hide(); //隐藏左右按钮

		dotList.find('li').click(function() { //鼠标点击下方索引对应相应的图片
			var index = $(this).index(); //获取点击的索引条的位置
			i = index; //让i等于index
			selector.find('ul:first').stop().animate({
				left: -1 * width * i
			}, 500); //移动到index对应的图片
			dotList.find('li').eq(i).addClass("on").siblings().removeClass("on"); //将点击的索引条的css设置为on
		})
		selector.hover(function() { //鼠标滑过box时
			clearInterval(timer); //清除计时器，使图片保持在hover时的图片
			button.show(); //显示左右按钮
			button.eq(0).hover(function() {
					$(this).css("background-positionY", position);
				},
				function() {
					$(this).css("background-position", "-10px -5px"); //鼠标离开时恢复原样
				});
			button.eq(1).hover(function() {
					$(this).css("background-positionY", position); //通过改变css来改变背景图片和透明度
				},
				function() {
					$(this).css("background-position", "-10px -5px"); //鼠标离开时恢复原样
				});
			if (autoplay) {}
		}, function() {
			button.hide(); //鼠标离开box时，隐藏左右按钮
			if (autoplay == true) {
				timer = setInterval(function() { //重新设置定时器，继续自动轮播
					i++;
					move();
				}, 2000);
			}
		});
		button.eq(1).click(function() { //点击向右的按钮
			i++;
			move();
		});
		button.eq(0).click(function() { //点击向左的按钮
			i--;
			move();
		});

		function move() { //图片移动的通用函数
			if (i == size + 1) { //当移动到最后一张图片时，若再向右移，通过改变css将图片移动至第一张图片的位置，即left：0
				imgList.css({
					left: 0
				});
				i = 1;
			};
			if (i == -1) { //当图片移动到第一张图片时，若再向左移，通过改变css将图片移动至最后一张图片的位置
				imgList.css({
					left: -width * size
				});
				i = size - 1; //改变位置后，将i的值改为size-2，再实现动画
			};
			imgList.stop().animate({
				left: -width * i
			}, 500); //图片移动的动画
			if (i == size) {
				dotList.find('li').eq(0).addClass("on").siblings().removeClass("on"); //移动到最后一张图片的时候，让第一个索引条处于on的状态
			} else {
				dotList.find('li').eq(i).addClass("on").siblings().removeClass("on");
			}
		}
	};
	return{
		swiper:swiper
	};
})