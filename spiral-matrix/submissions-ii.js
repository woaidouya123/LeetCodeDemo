/**
题目：螺旋矩阵 II
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top = 0, bottom = n - 1, left = 0, right = n - 1, res = new Array(n).fill(false).map(v=>new Array(n).fill(0)), count = sum = n**2;
    while(count > 0){
        for(let i=left;i<=right;i++){
            count--;
            res[top][i] = sum - count;
        }
        if(!count)break;
        top++;
        for(let i=top;i<=bottom;i++){
            count--;
            res[i][right] = sum - count;
        }
        if(!count)break;
        right--;
        for(let i=right;i>=left;i--){
            count--;
            res[bottom][i] = sum - count;
        }
        if(!count)break;
        bottom--;
        for(let i=bottom;i>=top;i--){
            count--;
            res[i][left] = sum - count;
        }
        if(!count)break;
        left++;
    }
    return res;
};