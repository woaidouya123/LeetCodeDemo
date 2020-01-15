/**
	罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

	字符          数值
	I             1
	V             5
	X             10
	L             50
	C             100
	D             500
	M             1000
	例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

	通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

	I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
	X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
	C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

	给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

	var nums = [Math.floor(num % 10), Math.floor(num % 100 / 10), Math.floor(num % 1000 / 100), Math.floor(num / 1000)],// 解析数字
		labels = "IVXLCDM",//罗马数字
		res = "", i, tl;// 保存结果

	for (i = 0; i < nums.length; i++) {
		tl = labels.substr(i * 2, 3);
		if (nums[i] > 0) {
			if (nums[i] <= 3) {
				while (nums[i] > 0) {
					res = tl[0] + res;
					nums[i] -= 1;
				}
			} else if (nums[i] == 4) {
				res = (tl[0] + tl[1]) + res;
			} else if (nums[i] < 9) {
				while (nums[i] - 5 > 0) {
					res = tl[0] + res;
					nums[i] -= 1;
				}
				res = tl[1] + res;
			} else {
				res = (tl[0] + tl[2]) + res;
			}
		}
	}
	console.log(res);
	return res
};
intToRoman(3495)
