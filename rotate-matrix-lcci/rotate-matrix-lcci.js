	/**
	题目：旋转矩阵
	给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

	不占用额外内存空间能否做到？

	 

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
	示例 2:

	给定 matrix =
	[
	  [ 5, 1, 9,11],
	  [ 2, 4, 8,10],
	  [13, 3, 6, 7],
	  [15,14,12,16]
	], 

	原地旋转输入矩阵，使其变为:
	[
	  [15,13, 2, 5],
	  [14, 3, 4, 1],
	  [12, 6, 8, 9],
	  [16, 7,10,11]
	]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	let len = matrix.length;
	function rotateChildMatrix(t){
		if(len - 2*t < 2)return;
		for(let i=t;i<len-t-1;i++){
			let pos = [[t, i],[i,len-1-t],[len-1-t,len-1-i],[len-1-i,t]];
			pos.reduce((pre,now)=>{
				let temp = matrix[now[0]][now[1]];
				matrix[now[0]][now[1]] = pre;
				return temp;
			},matrix[pos[3][0]][pos[3][1]])
			
		}
		rotateChildMatrix(t+1);
	}
	rotateChildMatrix(0);
	return matrix;
};
console.log(rotate(
	[
	  [ 5, 1, 9,11,3],
	  [ 2, 4, 8,10,6],
	  [13, 3, 6, 7,9],
	  [15,14,12,16,12],
	  [4,3,1,6,9]
	]
	))