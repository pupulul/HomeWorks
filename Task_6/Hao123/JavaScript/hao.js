// 这个变量是系统存储的color
var c = localStorage.getItem('color');
// 这个变量是按钮
var button = document.getElementsByClassName('bu');
// 这个变量是需要改变的文字
var change = document.getElementsByClassName('change');
// 这个变量是需要改变的背景
var bg = document.getElementsByClassName('bgchange');

// 这个操作是读取系统存储的color，然后改变颜色
switch (c) {
	case 'red':
		for (var i = 0; i < change.length; i++) {
			change[i].style.color = 'red';
		}
		for (var i = 0; i < bg.length; i++) {
			bg[i].style.background = 'red';
		}
		localStorage["color"] = "red";
		break;
	case 'yellow':
		for (var i = 0; i < change.length; i++) {
			change[i].style.color = 'yellow';
		}
		for (var i = 0; i < bg.length; i++) {
			bg[i].style.background = 'yellow';
		}
		localStorage["color"] = "yellow";
		break;
	case 'blue':
		for (var i = 0; i < change.length; i++) {
			change[i].style.color = 'blue';
		}
		for (var i = 0; i < bg.length; i++) {
			bg[i].style.background = 'blue';
		}
		localStorage["color"] = "blue";
		break;
	case 'green':
		for (var i = 0; i < change.length; i++) {
			change[i].style.color = 'green';
		}
		for (var i = 0; i < bg.length; i++) {
			bg[i].style.background = 'green';
		}
		localStorage["color"] = "green";
		break;
	case 'orange':
		for (var i = 0; i < change.length; i++) {
			change[i].style.color = 'orange';
		}
		for (var i = 0; i < bg.length; i++) {
			bg[i].style.background = 'orange';
		}
		localStorage["color"] = "orange";
		break;
	default:
		console.log('loading wrong');
		break;
}

// 代理，上方法
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener('click', color, false);
}

// 这个方法是按钮后根据id改变颜色
function color() {
	switch (this.id) {
		case 'red':
			for (var i = 0; i < change.length; i++) {
				change[i].style.color = 'red';
			}
			for (var i = 0; i < bg.length; i++) {
				bg[i].style.background = 'red';
			}
			localStorage["color"] = "red";
			break;
		case 'yel':
			for (var i = 0; i < change.length; i++) {
				change[i].style.color = 'yellow';
			}
			for (var i = 0; i < bg.length; i++) {
				bg[i].style.background = 'yellow';
			}
			localStorage["color"] = "yellow";
			break;
		case 'blu':
			for (var i = 0; i < change.length; i++) {
				change[i].style.color = 'blue';
			}
			for (var i = 0; i < bg.length; i++) {
				bg[i].style.background = 'blue';
			}
			localStorage["color"] = "blue";
			break;
		case 'gre':
			for (var i = 0; i < change.length; i++) {
				change[i].style.color = 'green';
			}
			for (var i = 0; i < bg.length; i++) {
				bg[i].style.background = 'green';
			}
			localStorage["color"] = "green";
			break;
		case 'ora':
			for (var i = 0; i < change.length; i++) {
				change[i].style.color = 'orange';
			}
			for (var i = 0; i < bg.length; i++) {
				bg[i].style.background = 'orange';
			}
			localStorage["color"] = "orange";
			break;
		default:
			console.log('color wrong');
			break;
	}
}

