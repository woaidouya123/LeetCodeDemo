/**
    题目：
    在计算机界中，我们总是追求用有限的资源获取最大的收益。

    现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。

    你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。

    注意:

    给定 0 和 1 的数量都不会超过 100。
    给定字符串数组的长度不会超过 600。
    示例 1:

    输入: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
    输出: 4

    解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let len = strs.length,par = [],max=0;
    for(let i=0;i<len;i++){
        let j=0,s=strs[i],s0=0,s1=0;
        while(j<s.length){
            s[j]==='1'?s1++:s0++;
            j++;
        }
        par[i] = [s0, s1];
    }

    function dynamic(index, m, n, count) {
        if (index >= len || count + (len - index) < max){
            max = Math.max(max,count);
            return count;
        }
        if (par[index][0] <= m && par[index][1] <= n) {
            return Math.max(dynamic(index + 1, m, n, count), dynamic(index + 1, m-par[index][0], n-par[index][1], count + 1))
        } else {
            return dynamic(index + 1, m, n, count);
        }
    }

    return dynamic(0, m, n, 0);
};
console.log(findMaxForm(["11","11","0","0","10","1","1","0","11","1","0","111","11111000","0","11","000","1","1","0","00","1","101","001","000","0","00","0011","0","10000"], 90, 66))
