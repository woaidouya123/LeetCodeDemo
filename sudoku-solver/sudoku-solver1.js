/**
    编写一个程序，通过已填充的空格来解决数独问题。

    一个数独的解法需遵循如下规则：

    数字 1-9 在每一行只能出现一次。
    数字 1-9 在每一列只能出现一次。
    数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
    空白格用 '.' 表示。

    一个数独。
    答案被标成红色。

    Note:

    给定的数独序列只包含数字 1-9 和字符 '.' 。
    你可以假设给定的数独只有唯一解。
    给定数独永远是 9x9 形式的。
*/
/**
 * 思路:
 * 在不考虑性能的前提下，暴力的使用递归策略：
 * 先将已有的数字信息进行按行/列/3*3宫格保存
 * 从左至右、从上到下对空数据的格子进行匹配
 * 匹配规则：若符合数字规则则继续进行下一个数字的匹配，若不符合，则返回到上一个数字的匹配
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    var i, j, columns = [], rows = [], grids = [], spaces = [], success = false;
    for (i = 0; i < board.length; i++) {
        columns.push({});
        rows.push({});
        grids.push({});
    }
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            if (board[i][j] == ".") {
                spaces.push([i, j]);
                continue;
            }
            rows[i][board[i][j]] = '1';
            columns[j][board[i][j]] = '1';
            grids[Math.floor(i / 3) * 3 + Math.floor(j / 3)][board[i][j]] = '1';
        }
    }
    function insertNum(index) {
        if (index >= spaces.length) {
            success = true;
            return;
        }
        var i, row = spaces[index][0], column = spaces[index][1], grid = Math.floor(spaces[index][0] / 3) * 3 + Math.floor(spaces[index][1] / 3);
        for (var i = 1; i <= 9; i++) {
            if (rows[row][i] == null && columns[column][i] == null && grids[grid][i] == null) {
                board[row][column] = i + '';
                rows[row][i] = '1';
                columns[column][i] = '1';
                grids[grid][i] = '1';
                insertNum(index + 1);
                if (success) {
                    return;
                }
                board[row][column] = '.';
                rows[row][i] = null;
                columns[column][i] = null;
                grids[grid][i] = null
            }
        }
    }
    insertNum(0);
    console.log(board);

};
solveSudoku(
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
);
