function math(sign) {

    // x是被除数 y是除数 z是结果
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    var z = document.getElementById("result");

    // 将string转为number
    x = Number(x);
    y = Number(y);

    switch (sign) {
        case "+":
            z.innerHTML = parseFloat((x + y).toFixed(8));
            //parseFloat() 函数可解析一个字符串，并返回一个浮点数；
            //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字；
            //此方法可以处理运算精度的bug；
            break;
        case "-":
            z.innerHTML = parseFloat((x - y).toFixed(8));
            break;
        case "*":
            z.innerHTML = parseFloat((x * y).toFixed(8));
            break;
        case "/":
            // 因为除法中有除数不能为0的规定，所以加入一个if判断;
            if (y != 0) {
                z.innerHTML = parseFloat((x / y).toFixed(8));
                break;
            } else {
                z.innerHTML = "除数不能为0";
                break;
            }
        default:
            z.innerHTML = "输入有误";
            break;
    }
}