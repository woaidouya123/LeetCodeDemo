/**
	题目：最长回文串
	给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

	在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

	注意:
	假设字符串的长度不会超过 1010。

	示例 1:

	输入:
	"abccccdd"

	输出:
	7

	解释:
	我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let stack = [], len = s.length, index, res = 0;
    for(let i=0;i<len;i++){
        index = stack.indexOf(s[i]);
        if(index > -1){
            stack.splice(index,1);
            res+=2;
        }else{
            stack.push(s[i]);
        }
    }
    if(stack.length > 0)return res+1;
    return res;
};