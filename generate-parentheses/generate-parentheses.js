/**
    题目：括号生成
    给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

    例如，给出 n = 3，生成结果为：

    [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
    ]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    function gen(str,left,right){
        if(left === n && right === n){
            res.push(str);
            return;
        }
        if(left < n){
            gen(str+"(",left+1,right);
        }
        if(right < left){
            gen(str+")",left,right+1)
        }
    }
    gen("",0,0);
    return res;
};
