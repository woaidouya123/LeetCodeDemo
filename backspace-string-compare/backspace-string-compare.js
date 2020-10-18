/**
题目：比较含退格的字符串
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
 

提示：

1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。
*/
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// 保存数据 从前至后
// var backspaceCompare = function(S, T) {
//     let s = '', t = '';
//     for(let i=0;i<S.length;i++){
//         if(S[i] === '#'){
//             s = s.substring(0,s.length?s.length-1:0);
//             continue;
//         }
//         s += S[i];
//     }
//     for(let i=0;i<T.length;i++){
//         if(T[i] === '#'){
//             t = t.substring(0,t.length?t.length-1:0);
//             continue;
//         }
//         t += T[i];
//     }
//     return s === t;
// };

// 指针写法
var backspaceCompare = function(S, T) {
    let stack;
    stack = 0;
    for(let i=S.length - 1;i>=0;i--){
        if(S[i] === '#'){
            S = S.substring(0,i)+S.substring(i+1);
            stack++;
            continue;
        }
        if(stack){
            S = S.substring(0,i)+S.substring(i+1);
            stack--;
        }
    }
    stack = 0;
    for(let i=T.length - 1;i>=0;i--){
        if(T[i] === '#'){
            T = T.substring(0,i)+T.substring(i+1);
            stack++;
            continue;
        }
        if(stack){
            T = T.substring(0,i)+T.substring(i+1);
            stack--;
        }
    }
    return S === T;
};