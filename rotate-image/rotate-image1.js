/**
    给定一个 n × n 的二维矩阵表示一个图像。

    将图像顺时针旋转 90 度。

    说明：

    你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

    示例 1:

    给定 matrix =
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],

    原地旋转输入矩阵，使其变为:
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]
 */
/**
 * 思路：
 * 把握旋转的位置变化
 *  列数——>行数
 *  总行数-1-行数——>列数
 * 根据变化生成新的数组
 * 最后生成的数组对应赋值到原来的数组
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var res = [], i, j, len = matrix.length;
    for (i = 0; i < len; i++) {
        res.push(new Array(len))
    }
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            res[j][len - 1 - i] = matrix[i][j];
        }
    }
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            matrix[i][j] = res[i][j];
        }
    }
    console.log(matrix);
};
rotate([
    [1, 2, 3, 22],
    [4, 5, 6, 33],
    [7, 8, 9, 44],
    [10, 11, 12, 55]
])
