/**
题目：有序数组的平方
给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

 

示例 1：

输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
示例 2：

输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
// var sortedSquares = function(A) {
//     let m = {}, res = [], len = A.length;
//     for(let i=0;i<len;i++){
//         let t = Math.abs(A[i]);
//         if(t in m)m[t]++;
//         else m[t] = 1;
//     }
//     for(let key in m){
//         res = res.concat(new Array(m[key]).fill(Math.pow(key,2)))
//     }
//     return  res;
// };
var sortedSquares = function(A) {
    let res = [], start = 0, end = A.length-1;
    while(start <= end) {
        if(Math.abs(A[start]) > Math.abs(A[end])){
            res.unshift(Math.pow(A[start++], 2));
        }else{
            res.unshift(Math.pow(A[end--], 2));
        }
    }
    return res;
};