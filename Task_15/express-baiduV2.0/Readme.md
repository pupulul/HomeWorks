1.XSS的防御；

public/javascripts/backup.js - 17 
public/javascripts/main.js - 76 
通过设置contentType与charset防止json和字符编码的XSS攻击

2.CSRF的防御

因为找不到免费的验证码。。所以用了token参数。
views/backup.ejs - 70
加入了一个隐藏的token参数
public/javascripts/backup.js - 6~16 206
设置了一个2到24位的随机数，并将它赋值给token。
public/javascripts/backup.js - 51~53 165~167 
在增加和修改项中间加了一个判断，如果随机数不同，则给用户一个弹窗提示。

3.SQL注入的防御

dao/userDao.js - 8 33~37 76~81 
使用htmlspecialchars实现字符转义，防止注入攻击

4.我用的dush shell
source profile.sh
大于0.2重启，代码14行可以改。