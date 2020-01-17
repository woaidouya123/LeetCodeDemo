/**
    给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

    示例:

    输入:
    [
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
    ]
    输出: 6
*/
/**
 * 思路：
 * 采用动态规划的思想，创建保存每个位置能出现的最大矩形的宽高的数组
 * 遍历数组，计算该位置最大矩形的宽高，计算方法如下：
 *     如果该位置数字为1：
 *         获取正上方数字的最大矩形宽高w1/h1,左面数字的最大矩形宽高w2/h2
 *         当前位置最大矩形宽w=min(w1,w2)+1,高h=min(h1,h2)
 *     如果该位置数字为0:
 *         当前位置最大矩形宽w=0,高h=0
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    var i, j, max = 0, save = [], w1, w2, h1, h2;
    for (i = 0; i < matrix.length; i++) {
        save.push(new Array(matrix[i].length));
    }
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == '1'){
                w1 = i == 0 ? 1 : Math.min(save[i - 1][j][0],(j==0?1:save[i][j-1][0]+1));
                h1 = i == 0 ? 1 : save[i - 1][j][1]+1;
                w2 = j == 0 ? 1 : save[i][j-1][2]+1;
                h2 = j == 0 ? 1 : Math.min(save[i][j-1][3],(i==0?1:save[i-1][j][3]+1));
                w1 = w1==0?1:w1;
                h2 = h2==0?1:h2;
                save[i][j] = [w1, h1, w2, h2];
                max = Math.max(max,w1*h1,w2*h2);
            }else{
                save[i][j] = [0, 0, 0, 0];
            }
        }
    }
    console.log(save)
    return max;
};
console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]));
