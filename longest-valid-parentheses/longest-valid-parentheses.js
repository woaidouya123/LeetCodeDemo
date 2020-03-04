/**
    题目: 最长有效括号
    给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

    示例 1:

    输入: "(()"
    输出: 2
    解释: 最长有效括号子串为 "()"
    示例 2:

    输入: ")()())"
    输出: 4
    解释: 最长有效括号子串为 "()()"
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [],m={},max=0,len = s.length;
    for(let i=0;i<len;i++){
        if(s[i] === '('){
            stack.unshift(i);
        }else{
            if(stack.length>0){
                m[stack.shift()] = i;
            }
        }
    }
    for(let i=0;i<len;i++){
        if(len - i < max)return max;
        if(s[i] === '('){
            max = Math.max(max,getMax(i))
        }
    }
    function getMax(index){
        let temp = m[index];
        if(temp){
            return (temp-index+1)+getMax(temp+1);
        }
        return 0;
    }
    return max;
};
