/**
	题目：组合
	给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

	示例:

	输入: n = 4, k = 2
	输出:
	[
	  [2,4],
	  [3,4],
	  [2,3],
	  [1,2],
	  [1,3],
	  [1,4],
	]

*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let dfs = function(arr, index){
        if(arr.length === k){
            res.push([].concat(arr));
            return;
        }
        if(index > n || k - arr.length > n - index + 1) return;
        arr.push(index);
        dfs(arr, index+1);
        arr.pop();
        dfs(arr, index+1);
    }
    dfs([], 1);
    return res;
};