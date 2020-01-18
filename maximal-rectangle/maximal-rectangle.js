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
 * 采用动态规划的思想，创建保存每个位置能出现的最大矩形的宽的数组,即保存为柱状图的数据
 * 遍历每一个保存的数据，从上往下计算以该位置为右下角的形成的最大矩形的面积，取最大值
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    var i, j, Max = 0, save = [], w;
    for (i = 0; i < matrix.length; i++) {
        save.push(new Array(matrix[i].length));
    }
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == '1'){
                if(j>0&&matrix[i][j-1]=='1'){
                    w = save[i][j-1]+1;
                }else{
                    w = 1;
                }
                save[i][j] = w;
            }else{
                save[i][j] = 0;
            }
        }
    }
    for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[i].length;j++){
            if(save[i][j] != 0){
                Max = Math.max(Max,calBarMax(i,j));
            }
        }
    }
    function calBarMax(x,y){
        var max = 1, height = 1,width=Infinity;
        while(x >= 0 && save[x][y] != 0){
            width = Math.min(width,save[x][y]);
            max = Math.max(width*height,max);
            height ++;
            x--;
        }
        return max;
    }
    return Max;
};
console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]));
