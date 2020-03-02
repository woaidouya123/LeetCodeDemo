/**
    题目：
    给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

    '.' 匹配任意单个字符
    '*' 匹配零个或多个前面的那一个元素
    所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

    说明:

    s 可能为空，且只包含从 a-z 的小写字母。
    p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
    示例 1:

    输入:
    s = "aa"
    p = "a"
    输出: false
    解释: "a" 无法匹配 "aa" 整个字符串。
    示例 2:

    输入:
    s = "aa"
    p = "a*"
    输出: true
    解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
    示例 3:

    输入:
    s = "ab"
    p = ".*"
    输出: true
    解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
    示例 4:

    输入:
    s = "aab"
    p = "c*a*b"
    输出: true
    解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
    示例 5:

    输入:
    s = "mississippi"
    p = "mis*is*p*."
    输出: false
 */

/**
 * 调用js的正则匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     return new RegExp(`^${p}$`,'g').test(s);
// };

/**
 * 回溯方法解决
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 先解析p
    let parse = [];
    for(let i=0;i<p.length;i++){
        if(i+1<p.length&&p[i+1]==='*'){
            parse.push(p.substr(i,2));
            i++;
        }else{
            parse.push(p[i]);
        }
    }
    function match(str_index,par_index){
        if(str_index >= s.length && par_index >= parse.length)return true;
        if(str_index >= s.length && !parseIsIgnore(par_index) || par_index >= parse.length)return false;
        if(parse[par_index].length === 1){
            if(parse[par_index] === '.' || s[str_index] === parse[par_index]){
                return match(str_index+1,par_index+1);
            }
            else return false;
        }else{
            if(parse[par_index][0] === '.' || s[str_index] === parse[par_index][0]){
                return match(str_index+1,par_index+1) || match(str_index,par_index+1) || match(str_index+1,par_index);
            }
            else{
                return match(str_index,par_index+1)
            }
        }
    }

    // 判断parse中剩余的是否全部可忽略
    function parseIsIgnore(index){
        if(index >= parse.length)return true;
        for(let i=index;i<parse.length;i++){
            if(parse[i].length === 1){
                return false;
            }
        }
        return true;
    }
    return match(0,0);
};
console.log(isMatch("mississippi",".*mis*is*ip*.*a*"))
