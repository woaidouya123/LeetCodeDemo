/**
	题目：将数组分成和相等的三个部分
	给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

	形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

	示例 1：

	输出：[0,2,1,-6,6,-7,9,1,2,0,1]
	输出：true
	解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
	示例 2：

	输入：[0,2,1,-6,6,7,9,-1,2,0,1]
	输出：false
	示例 3：

	输入：[3,3,6,5,-2,2,5,1,-9,4]
	输出：true
	解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
*/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let len = A.length, sum1 = 0, sum2=0, sum3 = 0;
    for(let i=0;i<len-2;i++){
        sum1 += A[i];
        sum2 = 0;
        for(let j=i+1;j<len-1;j++){
           sum2 += A[j];
           if(sum1 === sum2){
               sum3 = 0;
               for(let k=j+1;k<len;k++){
                   sum3 += A[k];
               }
               if(sum3 === sum1){
                    return true
                };
           } 
        }
    }
    return false;
};