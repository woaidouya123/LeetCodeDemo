/**
题目：二进制求和
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len_a = a.length, len_b = b.length, len = Math.max(len_a, len_b), res = "", w = 0, i = 0;
    if(len_a < len){
    	a = new Array(len-len_a).fill("0").join("")+a;
    }
    if(len_b < len){
    	b = new Array(len-len_b).fill("0").join("")+b;
    }
    while(i < len){
    	let t = (+a[len-1-i]) + (+b[len-1-i]) + w;
    	w = t >= 2?1:0;
    	res = (t>=2?(t-2):t)+res;
    	i++;
    }
    if(w > 0){
    	res = '' + w + res;
    }
    return res;
};
console.log(addBinary("1011","10101101"))