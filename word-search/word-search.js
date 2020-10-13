/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length, col = board[0].length, temp = new Array(row).fill(0).map(()=>new Array(col).fill(1)), res = false;
    const  dfs = function(r, c, i){
        if(i === word.length){
            res = true;
            return;
        }
        if(!res && r > 0 && temp[r-1][c] && board[r-1][c] === word[i]){
            temp[r-1][c] = 0;
            dfs(r-1, c, i+1);
            temp[r-1][c] = 1;
        }
        if(!res && r < row-1 && temp[r+1][c] && board[r+1][c] === word[i]){
            temp[r+1][c] = 0;
            dfs(r+1, c, i+1);
            temp[r+1][c] = 1;
        }
        if(!res && c > 0 && temp[r][c-1] && board[r][c-1] === word[i]){
            temp[r][c-1] = 0;
            dfs(r, c-1, i+1);
            temp[r][c-1] = 1;
        }
        if(!res && c < col-1 && temp[r][c+1] && board[r][c+1] === word[i]){
            temp[r][c+1] = 0;
            dfs(r, c+1, i+1);
            temp[r][c+1] = 1;
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(!res&&board[i][j] === word[0]){
                temp[i][j] = 0;
                dfs(i, j, 1);
                temp[i][j] = 1;
            }
        }
    }
    return res;
};