/**
题目：最小覆盖子串
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"
 

提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let len_s = s.length, len_t = t.length, temp = t.split(""), res = [], ls, le;
    for(let i=0;i<len_s;i++){
    	if(t.includes(s[i])){
    		if(s[i] in temp){
    			res.push(i);
    			temp.splice(temp.lastIndexOf(s[i]),1);
    		}else{
    			if(s[i] === res[0]){
    				res.pop();
    				res.push(i);
    			}else{
    				res.splice()
    			}
    		}
    	}
    }

};
console.log(minWindow("ADOBECODEBANC","ABC"))