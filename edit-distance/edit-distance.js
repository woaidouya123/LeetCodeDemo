/**
	题目：编辑距离
	给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

	你可以对一个单词进行如下三种操作：

	插入一个字符
	删除一个字符
	替换一个字符
	 

	示例 1：

	输入：word1 = "horse", word2 = "ros"
	输出：3
	解释：
	horse -> rorse (将 'h' 替换为 'r')
	rorse -> rose (删除 'r')
	rose -> ros (删除 'e')
	示例 2：

	输入：word1 = "intention", word2 = "execution"
	输出：5
	解释：
	intention -> inention (删除 't')
	inention -> enention (将 'i' 替换为 'e')
	enention -> exention (将 'n' 替换为 'x')
	exention -> exection (将 'n' 替换为 'c')
	exection -> execution (插入 'u')
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// var minDistance = function(word1, word2) {
//     let MIN=Math.max(word1.length,word2.length), len = word2.length;
//     function handle(index, w1, w2, count){
//         console.log(index,count);
//         if(count+Math.abs(w1.length - len) > MIN)return;
//         if(index === len){
//             MIN = Math.min(MIN, count+w1.length-len);
//             return;
//         }
//         if(w1[index] === w2[index]){
//             handle(index+1,w1,w2,count);
//         }else{
//         	let temp = w1[index];
//             w1[index] = w2[index];
//             handle(index+1,w1,w2,count+1);
//             if(temp != null){
//             	w1[index] = temp;
//             }else{
//             	w1.splice(index,1);
//             }
//             w1.splice(index,0,w2[index]);
//             handle(index+1,w1,w2,count+1);
//             w1.splice(index,1);
//             let t = w1[index];
//             w1.splice(index,1);
//             handle(index, w1, w2,count+1);
//             w1.splice(index,0,t);
//         }
//     }
//     handle(0,[...word1],[...word2],0);
//     return MIN;
// };
var minDistance = function(word1, word2) {
    let len1 = word1.length, len2 = word2.length;
    let dp = [];
    let i, j;
    for(i=0;i<=len1;i++){
        dp.push(new Array(len2+1));
    }
    for(i=0;i<=len1;i++){
        dp[i][0] = i;
    }
    for(j=0;j<=len2;j++){
        dp[0][j] = j;
    }
    
    for(i=1;i<=len1;i++){
        for(j=1;j<=len2;j++){
            if(word1[i-1]==word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
            }
        }
    }
    return dp[len1][len2];
};
var timeCount = new Date();
console.log(minDistance("pneumonoultramicroscopicsilicovolcanoconiosis",
"stereomicroscopically"));
console.log("time:",new Date().getTime() - timeCount.getTime() + "ms");