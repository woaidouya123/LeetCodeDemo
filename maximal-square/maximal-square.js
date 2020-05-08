/**
	题目：最大正方形
	在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

	示例:

	输入: 

	1 0 1 0 0
	1 0 1 1 1
	1 1 1 1 1
	1 0 0 1 0

	输出: 4

*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var i,j;
    var max = 0;
    function calCount(i,j,matrix,border){
        var temp_i = i,temp_j = j;
        if(i+border >= matrix.length || j+border >= matrix[0].length || Math.min(matrix[0].length - j, matrix.length - i) <= max){
            return border;
        }
        for(;temp_i <= i + border ;temp_i ++){
            if(matrix[temp_i][j + border] != 1){
                return border;
            }
        }
        for(;temp_j < j + border;temp_j ++){
            if(matrix[i+border][temp_j] != 1){
                return border;
            }
        }

        return calCount(i,j,matrix,border+1);
    }
    for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[0].length;j++){
            if(matrix[i][j] == 1){
                let temp = calCount(i,j,matrix,1);
                max = Math.max(temp,max);
            }
            
        }
    }
    return max*max;
};