define(["jquery"], function() {
	$(".tab-tittle2>li").each(function(index){
		var node= $(this);
		console.log(node);
		node.mouseenter(function(){
			$(".tab-con").eq(index).css("display","block");
		});
		node.mouseleave(function(){
			$(".tab-con").eq(index).css("display","none");
		});
	});

	$(".tab2>li").each(function(index){
		var node= $(this);
		console.log(node);
		node.mouseenter(function(){
			$(this).addClass("hltabOn");
			$(".hl-con").eq(index).css("display","block");
		});
		node.mouseleave(function(){
			$(this).removeClass("hltabOn");
			$(".hl-con").eq(index).css("display","");
		});
	});
})