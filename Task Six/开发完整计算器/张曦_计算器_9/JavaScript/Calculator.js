// 公式
// id在js里可以直接用

// 主要分为四个部分 数字区；科学运算区；独立按键区；二次计算区；


// 数字区 输入数字的时候公式版的内容增加
// 通过代理将点击事件分发给类名为btn－primary的节点 然后通过DOM获取值；
// 加入了一个判断，如果点击过＝，则将屏幕清空后再输入；
function more() {
	if (done) {
		document.getElementById('screen').innerHTML = "";
		done = false;
		document.getElementById('screen').innerHTML += this.innerHTML;
	} else {
		document.getElementById('screen').innerHTML += this.innerHTML;
	}
}
// 拿到一个数组，蓝色数字的类名
var number = document.getElementsByClassName('btn-primary');
// 循环数组，给一个点击事件监听，使用用more方法
for (var i = 0; i < number.length; i++) {
	// 这是一个兼容ie的绑定事件
	if (number[i].attachEvent) {
		number[i].attachEvent('onclick', more);
	} else {
		number[i].addEventListener('click', more, false);
	}
}



// 科学计算区
// 平方根，正弦，余弦，正切可以放在一起
// 使用代理，将点击事件分发给类名为math的节点，然后根据节点的id来使用不同的方法；
function math() {
	var tem = document.getElementById('screen').innerHTML;
	switch (this.id) {
		case 'sqrt':
			if (tem >= 0) {
				// paresFloat可以过滤小数点后的0
				document.getElementById('formula').innerHTML = document.getElementById('screen').innerHTML + "的平方根是";
				document.getElementById('screen').innerHTML = parseFloat(Math.sqrt(tem).toFixed(8));
			} else {
				document.getElementById('formula').innerHTML = "负数不能求平方根";
			}

			break;
		case 'sin':
			document.getElementById('formula').innerHTML = document.getElementById('screen').innerHTML + "的正弦值是";
			document.getElementById('screen').innerHTML = parseFloat(Math.sin(tem * Math.PI / 180).toFixed(8));
			break;
		case 'cos':
			document.getElementById('formula').innerHTML = document.getElementById('screen').innerHTML + "的余弦值是";
			document.getElementById('screen').innerHTML = parseFloat(Math.cos(tem * Math.PI / 180).toFixed(8));
			break;
		case 'tan':
			document.getElementById('formula').innerHTML = document.getElementById('screen').innerHTML + "的正切值是";
			document.getElementById('screen').innerHTML = parseFloat(Math.tan(tem * Math.PI / 180).toFixed(8));
			break;
		default:
			console.log('sciMath wrong');
			break;
	}
	point = false;
	done = true;
}
var sciMath = document.getElementsByClassName('math');

for (var i = 0; i < sciMath.length; i++) {
	if (sciMath.attachEvent) {
		sciMath[i].attachEvent('onclick', math);
	} else {
		sciMath[i].addEventListener('click', math, false);
	}

}


// 独立按键区
// .
var point = true;
dot.onclick = function dot() {
	if (done) {
		document.getElementById('screen').innerHTML = "";
		done = false;
		document.getElementById('formula').innerHTML = "请重新输入数字";

	} else {
		if (point) {
			document.getElementById('screen').innerHTML += ".";
			point = false;
		}
	}
}

// 正负值
// 正转负直接加－就可以，负转正求绝对值，0的绝对值还是0
pm.onclick = function pm() {
	var tem = document.getElementById('screen').innerHTML;
	if (tem > 0) {
		document.getElementById('screen').innerHTML = -tem;
	} else if (tem < 0) {
		document.getElementById('screen').innerHTML = Math.abs(tem);
	}
}

// 左上角清理屏幕健
clear.onclick = function clean() {
	document.getElementById('screen').innerHTML = "";
	document.getElementById('formula').innerHTML = "";
	point = true;
	done = false;
	// 清空数组
	var item;
	while (item = count.shift()) {
		console.log(item);
	}

	var item2;
	while (item2 = marks.shift()) {
		console.log(item2);
	}
	console.log(count);
	console.log(marks);
};
// 派
Pi.onclick = function Pi() {
	document.getElementById('formula').innerHTML = "常数Pi的值是"
	document.getElementById('screen').innerHTML = Math.PI.toFixed(8);
	point = false;
}


//二次运算区
// 三个变量 储存数字，符号
var Mark;
var count = new Array;
var marks = new Array;
// 这一组方法在点击标点符号时触发，将屏幕的值写入first，将符号写入mark，然后清除屏幕；
function doMath() {
	count.push(document.getElementById('screen').innerHTML);
	switch (this.id) {
		case 'add':
			Mark = 'add';
			break;
		case 'subtract':
			Mark = 'subtract';
			break;
		case 'multiply':
			Mark = 'multiply';
			break;
		case 'divide':
			Mark = 'divide';
			break;
		case 'pow':
			Mark = 'pow';
			break;
		default:
			console.log('doMath wrong');
			break;
	}
	marks.push(Mark);
	document.getElementById('screen').innerHTML = "";
	point = true;
}

var test = document.getElementsByClassName('doMath');
for (var i = 0; i < test.length; i++) {
	if (test[i].attachEvent) {
		test[i].attachEvent('onclick', doMath);
	} else {
		test[i].addEventListener('click', doMath, false);
	}
}


// 这一组方法在点击等号时触发，将屏幕的值写入second，如果没有写，将写入0，然后根据符号进行对应的运算，并输出结果；
var done = false;
// 加入一个布尔done，结束后不再继续输入数字
result.onclick = function result() {
	// 设置一个判读，如果未输入，则输入0
	var third = document.getElementById('screen').innerHTML;
	if (third == "") {
		third = 0;
	}
	count.push(third);

	// 两个临时数值分别为公式行和屏幕行
	var linshi = Number(count[0]);
	var linshi2 = Number(count[0]);

	for (var i = 0; i < marks.length; i++) {
		// 符号应该和数字相差一位，长度应该少一位。
		switch (marks[i]) {
			case 'add':
				linshi += "+" + count[i + 1];
				linshi2 += Number(count[i + 1]);
				break;
			case 'subtract':
				linshi += "-" + count[i + 1];
				linshi2 -= Number(count[i + 1]);
				break;
			case 'multiply':
				linshi += "*" + count[i + 1];
				linshi2 *= Number(count[i + 1]);
				break;
			case 'divide':
				// 除数不能为0
				if (Number(count[i + 1] == 0)) {
					document.getElementById('formula').innerHTML = "除数不能为0";
					return;
				} else {
					linshi += "/" + count[i + 1];
					linshi2 /= Number(count[i + 1]);
				}
				break;
			case 'pow':
				linshi += "^" +count[i+1];
				linshi2 = Math.pow(linshi2,count[i+1]);
			default:
				console.log('result wrong');
				break;
		}
		console.log(count);
	}

	// 将临时数值输入页面
	document.getElementById('formula').innerHTML = linshi;
	// 对结果进行js高精度计算处理
	document.getElementById('screen').innerHTML = parseFloat(linshi2.toFixed(8));

	// 小数点重置
	point = true;
	// 等号输入确认
	done = true;
	// 清空数组
	var item;
	while (item = count.shift()) {
		console.log(item);
	}

	var item2;
	while (item2 = marks.shift()) {
		console.log(item2);
	}
	console.log(count);
	console.log(marks);
}


// 以上已经能用了