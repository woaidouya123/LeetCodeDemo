/**
题目：移掉K位数字
给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。
示例 1 :

输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
示例 2 :

输入: num = "10200", k = 1
输出: "200"
解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
示例 3 :

输入: num = "10", k = 2
输出: "0"
解释: 从原数字移除所有的数字，剩余为空就是0。
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// var removeKdigits = function(num, k) {
//     let len = num.length, count = len - k, s = num.substr(k), min = +s, min_s = num.substr(k);
//     for(let i=k-1;i>=0;i--){
//         if(+num[i] > +s[0])continue;
//         for(let j=0;j<count;j++){
//             let s1 = num[i]+s.substr(0,j)+s.substr(j+1);
//             if(+s1 < min){
//                 min = +s1;
//                 min_s = s1;
//             }
//         }
//         s = min_s;
//     }
//     return min+"";
// };
var removeKdigits = function(num, k) {
    const stk = [];
    for (const digit of num) {
        while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
            stk.pop();
            k -= 1;
        }
        stk.push(digit);
    }

    for (; k > 0; --k) {
        stk.pop();
    }

    let ans = "";
    let isLeadingZero = true;
    for (const digit of stk) {
        if (isLeadingZero && digit === '0') {
            continue;
        }
        isLeadingZero = false;
        ans += digit;
    }
    return ans === "" ? "0" : ans;
};