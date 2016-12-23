
$(document).ready(function() {

    refreshNews();


    // 修改新闻
    var updateId = null;
    $("#newstable").on('click', '.btn-primary', function(e) {
        updateId = $(this).parent().prevAll().eq(3).html();
        console.log(updateId);
        $("#updateModal").modal('show');
        $.ajax({
            url: './query/query',
            type: 'post',
            datatype: 'json',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            data: {
                newsid: updateId
            },
            success: function(data) {
                $('#unewstitle').val(data[0].newstitle);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewscontent').val(data[0].newscontent);
                $('#uclassInfo').val(data[0].class);
                // 用正则表达式直接切割不规则的时间格式
                var utime = data[0].addtime.split('T',1);
                $('#uaddtime').val(utime);
                $("#deleteModal").modal('hide');
                refreshNews();
            },
            error: function(error) {
                console.log(error);
            }
        })


    });

    $("#updateModal #confirmUpdate").click(function(e) {
        $.ajax({
            url: './query/update',
            type: 'post',
            datatype: 'json',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            data: {
                newsid: updateId,
                newstitle: $("#unewstitle").val(),
                newsimg: $("#unewsimg").val(),
                newscontent: $("#unewscontent").val(),
                addtime: $("#uaddtime").val(),
                class: $("#uclassInfo").val()
            },
            success: function(data) {
                console.log(data);
                $("#updateModal").modal('hide');
                refreshNews();

            },
            error: function(error) {
                console.log(error);
            }
        })
    })












    // 删除新闻
    var deleteId = null;
    $("#newstable").on('click', '.btn-danger', function(e) {
        deleteId = $(this).parent().prevAll().eq(3).html();
        console.log(deleteId);
        $("#deleteModal").modal('show');
    });

    $("#confirmDelete").click(function(e) {
        if (deleteId) {
            $.ajax({
                url: './query/delete',
                type: 'post',
                datatype: 'json',
                contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
                data: {
                    newsid: deleteId,
                    newstitle: $("#newstitle").val(),
                    newsimg: $("#newsimg").val(),
                    newscontent: $("#newscontent").val(),
                    addtime: $("#addtime").val(),
                    class: $("#classInfo").val()
                },
                success: function(data) {
                    console.log(data);
                    $("#deleteModal").modal('hide');
                    refreshNews();

                },
                error: function(error) {
                    console.log(error);
                }
            })
        }
    });












    // 增加新闻
    $("#btnsubmit").click(function(e) {
        e.preventDefault();


        if ($("#newstitle").val() === "" || $("#newsimg").val() === "" || $("#newscontent").val() === "" || $("#addtime").val() === "") {
            if ($("#newstitle").val() === "") {
                $("#newstitle").parent().addClass('has-error');
            } else {
                $("#newstitle").parent().removeClass('has-error');
            }
            if ($("#newsimg").val() === "") {
                $("#newsimg").parent().addClass('has-error');
            } else {
                $("#newsimg").parent().removeClass('has-error');
            }
            if ($("#newscontent").val() === "") {
                $("#newscontent").parent().addClass('has-error');
            } else {
                $("#newscontent").parent().removeClass('has-error');
            }
            if ($("#addtime").val() === "") {
                $("#addtime").parent().addClass('has-error');
            } else {
                $("#addtime").parent().removeClass('has-error');
            }
        } else {
            // var jsonNews = 
            // 提交
            $.ajax({
                url: './query/insert',
                type: 'POST',
                contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
                datatype: 'json',
                data: {
                    newstitle: $("#newstitle").val(),
                    newsimg: $("#newsimg").val(),
                    newscontent: $("#newscontent").val(),
                    addtime: $("#addtime").val(),
                    class: $("#classInfo").val()
                },
                success: function(data) {
                    console.log(data);
                    alert("添加数据成功");
                },
                error: function(error) {
                    console.log(error);
                    console.log("数据添加失败");
                }

            });
        };
        refreshNews();
    });









    // 刷新页面
    function refreshNews() {
        $("#newstable .tbody").empty();

        $.ajax({
            type: 'POST',
            url: './query/queryAll',
            datatype: 'json',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            data: {
                class: "推荐"
            },
            success: function(data) {
                console.log('1');
                for (i = 0; i < data.length; i++) {
                    var time= data[i].addtime.split('T',1);
                    $("#newstable").append(
                        "<tbody" + " " + "class='tbody'>" +
                        "<td>" + data[i].newsid + "</td>" +
                        "<td>" + data[i].class + "</td>" +
                        "<td>" + data[i].newstitle + "</td>" +
                        "<td>" + time + "</td>" +
                        "<td>" +
                        "<button" + " " + "class='btn" + " " + "btn-primary" + " " + "btn-xs'>" + "修改" + "</button>" +
                        "<button" + " " + "class='btn" + " " + "btn-danger" + " " + "btn-xs'>" + "删除" + "</button>" +
                        "</td>" + "</tbody>"
                    );
                }
            },
            error: function(error) {
                console.log(error);
            }
        })
    }
});
