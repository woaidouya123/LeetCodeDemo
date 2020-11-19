/**
题目：排列序列
给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

 

示例 1：

输入：n = 3, k = 3
输出："213"
示例 2：

输入：n = 4, k = 9
输出："2314"
示例 3：

输入：n = 3, k = 1
输出："123"
 

提示：

1 <= n <= 9
1 <= k <= n!

*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let t = p = 1, res = "", arr = new Array(n).fill(0).map((v,i)=>i+1), save = new Array(n).fill(0);
    if(n === 1) return n+"";
    while(p<n){
        t=t*p;
        p++;
    }
    let c = --p;
    while(k > 0){
        if(k > t){
            k -= t;
            save[c-p]++;
        }else{
            if(p === 1){
                save[c-p+1] = k-1;
                break;
            }
            t = t/p;
            p--;
        }
    }
    for(let i=0;i<n;i++){
        res += arr.splice(save[i],1)[0];
    }
    return res;
};