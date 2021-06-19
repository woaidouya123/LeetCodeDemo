/*
 * @lc app=leetcode.cn id=1239 lang=javascript
 *
 * [1239] 串联字符串的最大长度
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    arr = arr.filter(v => Array.from(new Set(v.split(""))).length == v.length);
    let len = arr.length, m = new Array(26).fill(0), res = 0;
    let dfs = function (index, count) {
        if (index >= len) {
            res = Math.max(res, count);
            return;
        }
        let temp = arr[index].split("");
        if (temp.every(v => m[v.charCodeAt(0) - 97] == 0)) {
            temp.forEach(v => {
                m[v.charCodeAt(0) - 97] = 1;
            })
            dfs(index + 1, count + temp.length);
            temp.forEach(v => {
                m[v.charCodeAt(0) - 97] = 0;
            })
        }
        dfs(index + 1, count);
    }
    dfs(0, 0);
    return res;
};
// @lc code=end

