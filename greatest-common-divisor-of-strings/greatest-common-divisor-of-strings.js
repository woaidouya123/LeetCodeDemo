/**
	题目：字符串的最大公因子
	对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

	返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

	 

	示例 1：

	输入：str1 = "ABCABC", str2 = "ABC"
	输出："ABC"
	示例 2：

	输入：str1 = "ABABAB", str2 = "ABAB"
	输出："AB"
	示例 3：

	输入：str1 = "LEET", str2 = "CODE"
	输出：""
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length, len2 = str2.length,res="";
    let len = Math.min(len1, len2);
    for(let i=len;i>0;i--){
        if(len1%i !== 0 || len2%i !== 0)continue;
        let j;
        for(j=0;j<i;j++){
            if(str1[j] !== str2[j])break;
        }
        if(j<i)continue;
        for(j=i;j<=len1;j++){
            if(str1[j] !== str1[j%i])break;
        }
        if(j<len1)continue;
        for(j=i;j<len2;j++){
            if(str2[j] !== str1[j%i])break;
        }
        if(j<len2)continue;
        res = str1.slice(0,i);
        return res;
    }
    return res;
};