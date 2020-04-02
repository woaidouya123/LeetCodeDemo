/**
题目：生命游戏
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

*/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var newboard = [];
    var i,j;
    function countLive(i,j,board){
        let count = 0;
        let startX = i - 1 > 0 ? i-1:0;
        let endX = i + 1 < board.length ? i+1:board.length-1;
        let startY = j - 1 > 0 ? j-1:0;
        let endY = j + 1 < board[0].length ? j+1:board[0].length-1;
        for(let x=startX;x<=endX;x++){
            for(let y = startY;y<=endY;y++){
                if(board[x][y] == 1){
                    if(!(x==i&&y==j)){
                        count ++;
                    }
                    
                }
            }
        }
        return count;
    }
    for(i=0;i<board.length;i++){
        for(j=0;j<board[0].length;j++){
            var count = countLive(i,j,board);
            if(board[i][j] == 1){
                (count < 2 || count > 3) && (newboard.push([i,j,0]));
                count >= 2 && count <= 3&&(newboard.push([i,j,1]));
            }else{
                if(count == 3){
                    newboard.push([i,j,1]);
                }else{
                    newboard.push([i,j,0]);
                }
            }
        }
    }
    
    for(i=0;i<newboard.length;i++){
        board[newboard[i][0]][newboard[i][1]] = newboard[i][2];
    }
};