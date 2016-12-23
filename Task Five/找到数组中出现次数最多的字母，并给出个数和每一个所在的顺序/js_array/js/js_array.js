var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
//题目数组
var count = 0;
//计数
var letter;
//最多字母

// 首先定义了两个数组
// counter用于存储重复字母的次数
// pos用于存储重复字母的下标
var counter = {};
var pos = {};

//for循环遍历数组
for (var i = 0; i < array.length; i++) {
	// 设置一个变量座位key值，它是一个字母
	var zm = array[i];
	// 如果重复集合里有这个值，进行如下操作
	if (counter[zm]) {
		// 重复集合对应的值加1
		// 下标集合对应的值加，＋下标数字
		counter[zm]++;
		pos[zm] += "," + i;
		// 如果没有，将它赋值1，同时将下标集合赋值数字
	} else {
		counter[zm] = 1;
		pos[zm] = i;
	}
}

// 给重复集合进行由大到小的排序，第一个值是数字最大的值，返回它的key
letter = Object.keys(counter).sort(function(a, b) {
	return counter[a] < counter[b]
})[0];

console.log("重复最多的字母是：" + letter);
console.log("重复的次数是：" + counter[letter]);
console.log("对应的下标是：" + pos[letter]);