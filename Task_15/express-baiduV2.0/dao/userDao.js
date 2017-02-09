// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');

// 转义敏感字符，这个好用
var htmlspecialchars = require('htmlspecialchars');

// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.body;
            // var result = req.body.newstitle;
            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            var newstitle = htmlspecialchars(param.newstitle);
            var newsimg = htmlspecialchars(param.newsimg);
            var newscontent = htmlspecialchars(param.newscontent);
            var addtime = htmlspecialchars(param.addtime);
            var nClass = htmlspecialchars(param.class);
            connection.query($sql.insert, [newstitle, newsimg, newscontent, addtime, nClass], function(err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: '增加成功'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);
                // 释放连接 
                connection.release();
            });
        });
    },
    delete: function(req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.body.newsid;
            connection.query($sql.delete, id, function(err, result) {
                if (result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg: '删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },

    // get 用params post 用body
    update: function(req, res, next) {
        // update by id
        var param = req.body;
        var newstitle = htmlspecialchars(param.newstitle);
        var newsimg = htmlspecialchars(param.newsimg);
        var newscontent = htmlspecialchars(param.newscontent);
        var addtime = param.addtime;
        var nClass = htmlspecialchars(param.class);
        var newsid = htmlspecialchars(param.newsid);
        pool.getConnection(function(err, connection) {
            connection.query($sql.update, [newstitle, newsimg, newscontent, addtime, nClass, newsid], function(err, result) {
                // 使用页面进行跳转提示
                if (result.affectedRows > 0) {
                    jsonWrite(res, "update success");
                } else {
                    jsonWrite(res, "update Fail");
                }
                connection.release();
            });
        });

    },
    queryById: function(req, res, next) {
        var id = req.body.newsid; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, id, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryAll: function(req, res, next) {
        var classText = req.body.class;

        // jsonWrite(res,result.class);
        pool.getConnection(function(err, connection) {
            if (classText == "推荐") {
                connection.query($sql.queryAll, function(err, result) {
                    jsonWrite(res, result);
                    connection.release();
                });
            } else {
                connection.query($sql.queryByClassName, classText, function(err, result) {
                    jsonWrite(res, result);
                    connection.release();
                });
            }
        });
    }

};
