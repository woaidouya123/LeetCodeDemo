/**
	题目：01 矩阵
	给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

	两个相邻元素间的距离为 1 。

	示例 1:
	输入:

	0 0 0
	0 1 0
	0 0 0
	输出:

	0 0 0
	0 1 0
	0 0 0
	示例 2:
	输入:

	0 0 0
	0 1 0
	1 1 1
	输出:

	0 0 0
	0 1 0
	1 2 1
	注意:

	给定矩阵的元素个数不超过 10000。
	给定矩阵中至少有一个元素是 0。
	矩阵中的元素只在四个方向上相邻: 上、下、左、右。
*/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let rows = matrix.length, columns = matrix[0].length, zeros=[];
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(matrix[i][j] === 0){
                zeros.push([i, j]);
            }
        }
    }
    function caldist(x, y, dist){
        if(x<0 || x>rows-1)return;
        if(y<0 || y>columns-1)return;
        if(matrix[x][y] !== 0){
            if(matrix[x][y] === 1 || matrix[x][y] > dist){
                matrix[x][y] = dist;
                caldist(x-1,y,dist+1);
                caldist(x+1,y,dist+1);
                caldist(x,y-1,dist+1);
                caldist(x,y+1,dist+1);
            }
        }
    }
    for(let i=0;i<zeros.length;i++){
        caldist(zeros[i][0]-1, zeros[i][1], 2);
        caldist(zeros[i][0]+1, zeros[i][1], 2);
        caldist(zeros[i][0], zeros[i][1]-1, 2);
        caldist(zeros[i][0], zeros[i][1]+1, 2);
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(matrix[i][j] !== 0){
                matrix[i][j] = matrix[i][j]-1;
            }
        }
    }
    return matrix;

};