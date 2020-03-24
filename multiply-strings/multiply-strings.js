/**
	题目：字符串相乘
	给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

	示例 1:

	输入: num1 = "2", num2 = "3"
	输出: "6"
	示例 2:

	输入: num1 = "123", num2 = "456"
	输出: "56088"
	说明：

	num1 和 num2 的长度小于110。
	num1 和 num2 只包含数字 0-9。
	num1 和 num2 均不以零开头，除非是数字 0 本身。
	不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let mul="0",len1 = num1.length, len2 = num2.length;
    if(num1 === "0" || num2 === "0")return mul; 
    for(let i=len1-1;i>=0;i--){
        let sum = "0";
        for(let j=len2-1;j>=0;j--){
            sum = add(parseInt(num1[i])*parseInt(num2[j])+fillZero(len2-j-1),sum);
        }
        mul = add(mul,sum+fillZero(len1-i-1));
    }

    function add(a, b){
        let mlen = Math.min(a.length, b.length),jw=0,left,temp,res="";
        if(mlen === 0)return a+b;
        if(a.length > b.length){
            left = a.slice(0,a.length-mlen);
            a = a.substr(a.length-mlen);
        }else{
            left = b.slice(0,b.length-mlen);
            b = b.substr(b.length-mlen);
        }
        for(let i=mlen-1;i>=0;i--){
            temp = parseInt(a[i]) + parseInt(b[i])+jw;
            jw = temp>=10?1:0;
            res = temp%10+res;
        }
        if(jw > 0){
            return add(left,jw+"")+res;
        }else{
            return left + res;
        }
    }

    function fillZero(n){
        let temp="";
        for(let i=0;i<n;i++){
            temp+="0";
        }
        return temp;
    }
    return mul;
};