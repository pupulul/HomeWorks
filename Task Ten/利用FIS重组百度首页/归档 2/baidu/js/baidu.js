// middle切换
$(document).ready(function() {
    $(".middleNav span").each(function(index) {
        var sNode = $(this);
        $(this).click(function() {
            $("div.contentFocus").removeClass("contentFocus");
            $("div.content").eq(index).addClass("contentFocus");

            $("span.navFocus").removeClass("navFocus");
            sNode.addClass("navFocus");
        });
    });
});


// top换肤
var nSrc = localStorage.getItem("bg");
console.log(nSrc);
// 判断nSrc里是否有匹配地址。
var result = null;

if(nSrc != null){
    result = nSrc.match("img");
    console.log(nSrc.match("img"));
}else{
    nsrcN();
}

// 如果不匹配，执行初始化方法，如果匹配，则使用改地址。
if(result == null){
    nsrcN();
}else{
    nsrc(nSrc);
}

function nsrc(nSrc) {//换肤方法
    $("body").css("background", "url(" + nSrc + ")");
    $(".changeNone").css("display", "block");
    $(".middleLogo img").attr('src', "img/logo_white.png");
    $(".topTemp").css("color", "white");
    $(".topLeft a").css("color", "white");
    $(".topRight a").css("color", "white");
    localStorage["bg"] = nSrc;
}

function nsrcN() {//初始化方法
    $("body").css("background", "");
    $(".changeNone").css("display", "");
    $(".middleLogo img").attr('src', "img/bd_logo.png");
    $(".topTemp").css("color", "");
    $(".topLeft a").css("color", "");
    $(".topRight a").css("color", "");
    localStorage["bg"] = "";
}

$(document).ready(function() {//标签切换
    $(".changeNav span").each(function(index) {
        var cNode = $(this);
        $(this).click(function() {
            $("div.changePageFocus").removeClass("changePageFocus");
            $("div.changePage").eq(index).addClass("changePageFocus");
            $("span.changeNavFocus").removeClass("changeNavFocus");
            cNode.addClass("changeNavFocus");
        })
    })


    $(".inner img").each(function() {//绑定点击事件
        $(this).click(function() {
            nSrc = $(this)[0].src;
            nsrc(nSrc);
        })
    })


    $(".changeNone").click(function() {//初始化方法
        nsrcN();
    });

    $(".changeSkin").click(function() {
        $(".middleChange").slideDown("normal");
    })

    $(".changeClose").click(function() {
        $(".middleChange").slideUp("normal");
    })

})

// 返回顶部
window.onscroll = function() {//屏幕滚动大于0时显示按钮
    var dh = $(window).scrollTop();
    if (dh > 0) {
        $(".return").show();
    } else {
        $(".return").hide();
    }
}

$(".return").mouseenter(function(){
    $(".return")[0].innerHTML="返回顶部";
});

$(".return").mouseleave(function(){
    $(".return")[0].innerHTML="<img src='img/arrow-up.png'>";
});


$(".return").click(function() {//点击后动画返回顶部
    $('body,html').animate({
        scrollTop: 0
    }, 300);
})

// 右上角blue
$(".blue").hover(function() {
    $("div.disappear").css("display", "block");
});
$("div.disappear").mouseleave(function() {
    $("div.disappear").css("display", "none");
});
$(".disappear").mouseenter(function(){
    $("body").css("overflow","hidden");
})
$(".disappear").mouseleave(function() {
    $("body").css("overflow", "");
});

// 搜索框聚焦
$(".middleText").focus(function() {
    $(".middleText").css("border", "2px solid blue");
});
$(".middleText").blur(function() {
    $(".middleText").css("border", "");
});



// 我的关注
$(".contentFather span").click(function(){
    $(".contentFather li").slideToggle();
})

$(".contentFather").hover(function(){
    $(".contentFatherR").toggle();
})

$(".contentChildren").mouseenter(function(){
    $(this).css("background","#ccc");
})

$(".contentChildren").mouseleave(function(){
    $(this).css("background","");
})

$(".contentFatherR a").mouseenter(function(){
    $(this).css("color","blue");
})

$(".contentFatherR a").mouseleave(function(){
    $(this).css("color","");
})

// 推荐
$(".tuijian a").mouseenter(function(){
    $(this).css({"text-decoration":"underline","color":"blue"});
})

$(".tuijian a").mouseleave(function(){
    $(this).css({"text-decoration":"","color":""});
})

