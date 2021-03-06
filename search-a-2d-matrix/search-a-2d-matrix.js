/**
题目：搜索二维矩阵
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
 

示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
输出：true
示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
输出：false
示例 3：

输入：matrix = [], target = 0
输出：false
 

提示：

m == matrix.length
n == matrix[i].length
0 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length <= 0)return false;
    let m = matrix.length, n = matrix[0].length, left = 0, right = m*n;
    if(n <= 0)return false;
    if(target === matrix[0][0] || target === matrix[m-1][n-1])return true;
    while(left < right-1){
        let mid = Math.floor((left+right)/2);
        if(target === matrix[Math.floor(mid/n)][mid%n]){
            return true;
        }
        if(target > matrix[Math.floor(mid/n)][mid%n]){
            left = mid;
        }
        if(target < matrix[Math.floor(mid/n)][mid%n]){
            right = mid;
        }
    }
    return false;
};