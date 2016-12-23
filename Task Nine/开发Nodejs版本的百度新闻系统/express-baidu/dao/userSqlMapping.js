
// CRUD SQL语句
var user = {
    insert: 'INSERT INTO news(newstitle,newsimg,newscontent,addtime,class) VALUES(?,?,?,?,?)',
    update: 'update news set newstitle=?,newsimg=?,newscontent=?,addtime=?,class=? where newsid=?',
    delete: 'delete from news where newsid=?',
    queryById: 'select * from news where newsid=?',
    queryByClassName: 'select * from news where class=?',
    queryAll: 'select * from news'
};

module.exports = user;
