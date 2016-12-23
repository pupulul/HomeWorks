var classText;
$(document).ready(function() {
    switcH();
    rAjax();
});



// 标签切换
function switcH() {
    $(".list").each(function(index) {
        $(this).click(function() {

            $(".col-xs-3").removeClass('bottom');
            $(".col-xs-3").eq(index).addClass('bottom');

            classText = $(this)[0].innerHTML;
            console.log(classText);
            switch (classText) {
                case "更多":
                    $(".outer").removeClass('hide');
                    break;
                case "设置":
                    $(function(){
                        location.href="backup.html";
                    })
                    break;
                case "推荐":
                    $(".formShowUp").addClass('hide');
                    $(".showUp").removeClass('hide');
                    // 删除已有的section
                    $("section").remove();
                    console.log(classText);

                    rAjax();
                    break;
                default:
                    $(".formShowUp").addClass('hide');
                    $(".showUp").removeClass('hide');
                    // 删除已有的section
                    $("section").remove();
                    switch (classText) {
                        case "百家":
                            rAjax("百家");
                            break;
                        case "国际":
                            rAjax("国际");
                            break;
                        case "本地":
                            rAjax("本地");
                            break;
                        case "体育":
                            rAjax("体育");
                            break;
                        case "娱乐":
                            rAjax("娱乐");
                            break;
                        default:
                            console.log("switch wrong");
                    }
            }
        });
    });
}


// 封装了一个函数
// 查询
function rAjax(classText) {
    if(!classText){
        classText="推荐";
    }
    console.log(classText);
    $.ajax({
        type: 'POST',
        url: './php/select.php',
        dataType: 'json',
        data:{
            class:classText
        },
        success: function(data) {
            console.log(data); //服务器响应成功的话，响应体以data参数的形式传入函数中供调用。
            console.log(data.length);
            console.log(classText);
            var count = 0;
            for (i = 0; i < data.length; i++) {
                // 通过计数器来实现显示限制
                if (count > 9) {
                    break;
                }
                    $("#article").append(
                        "<section" + " " + "class='showUp'>" +
                        "<img" + " " + "src=" + data[i].newsimg + " " + "class='newsimg'></img>" +
                        "<label" + " " + "class='newstitle'>" + data[i].newstitle + "</label>" +
                        "<span" + " " + "class='newscontent'>" + data[i].newscontent + "</span>" +
                        "<span" + " " + "id='result'" + " " + "class='addtime'>" + data[i].addtime + "</span>" +
                        "</section>"
                    );

                    count++;
                    console.log(count);
            }
        },
        error: function(error) {
            console.log(error);
            console.log("数据库读取失败");
        }
    });
}



// 返回顶部
$(function() {
    // 滚动后按钮出现
    $(window).scroll(function() {
        var t = $(this).scrollTop();
        if (t > 200) {
            $(".top").stop().fadeIn();
        } else {
            $(".top").stop().fadeOut();
        }
    })

    // 点击返回顶端
    $(".top").click(function() {
        // firefox和ie不支持body滚动，需要加入html滚动
        $("body,html").stop().animate({ scrollTop: 0 }, 300)
    });
});
