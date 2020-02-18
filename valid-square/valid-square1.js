/**
    题目：
    给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。

    一个点的坐标（x，y）由一个有两个整数的整数数组表示。

    示例:

    输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
    输出: True

 */
/**
 * 思路：由正方形定义（一个四边形为正方形当且仅当它的四条边长度相等并且两条对角线的长度也相等）
 * 计算由4个点链接组成的图形中是否有四条边相等的情况
 */
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    var dots = [p1, p2, p3, p4],i,j,k,l,len,xlen;
    for(i=0;i<dots.length;i++){
        for(j=0;j<dots.length;j++){
            if(i == j) continue;
            len = Math.pow(dots[i][0] - dots[j][0],2) + Math.pow(dots[i][1] - dots[j][1],2);
            if(len == 0) continue;
            for(k=0;k<dots.length;k++){
                if(k == i || k == j) continue;
                if(len != Math.pow(dots[j][0] - dots[k][0],2) + Math.pow(dots[j][1] - dots[k][1],2)) break;
                xlen = Math.pow(dots[i][0] - dots[k][0],2) + Math.pow(dots[i][1] - dots[k][1],2);
                if(xlen == 0) continue;
                for(l=0;l<dots.length;l++){
                    if(l == i || l == j || l == k) continue;
                    if(len != Math.pow(dots[k][0] - dots[l][0],2) + Math.pow(dots[k][1] - dots[l][1],2)) break;
                    if(len != Math.pow(dots[i][0] - dots[l][0],2) + Math.pow(dots[i][1] - dots[l][1],2)) break;
                    if(xlen != Math.pow(dots[j][0] - dots[l][0],2) + Math.pow(dots[j][1] - dots[l][1],2)) break;
                    console.log(i,j,k,l);
                    return true;
                }
            }
        }
    }
    return false;
};
console.log(validSquare([1,1],
    [0,0],
    [1,0],
    [0,1]))
