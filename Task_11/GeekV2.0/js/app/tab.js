define(["jquery"], function() {
    $(".tab-tittle2>li").each(function(index) {
        var node = $(this);
        console.log(node);
        node.mouseenter(function() {
            $(".tab-con").eq(index).css("display", "block");
        });
        node.mouseout(function() {
            $(".tab-con").eq(index).css("display", "none").delay(1000);
        });
    });

    $(".tab2>li").each(function(index) {
        var node = $(this);
        console.log(node);
        node.mouseover(function() {
            $(this).addClass("hltabOn");
            $(".hl-con").eq(index).css("display", "block");
        });
        node.mouseout(function() {
            $(this).removeClass("hltabOn");
            $(".hl-con").eq(index).css("display", "");
        });
    });

})
