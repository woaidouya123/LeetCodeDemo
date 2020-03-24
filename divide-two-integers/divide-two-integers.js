/**
	题目：两数相除
	给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

	返回被除数 dividend 除以除数 divisor 得到的商。

	整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

	 

	示例 1:

	输入: dividend = 10, divisor = 3
	输出: 3
	解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
	示例 2:

	输入: dividend = 7, divisor = -3
	输出: -2
	解释: 7/-3 = truncate(-2.33333..) = -2
	 

	提示：

	被除数和除数均为 32 位有符号整数。
	除数不为 0。
	假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
*/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let tempA = dividend>0?dividend:0-dividend,
    tempB = divisor>0?divisor:0-divisor,
    sign = 1,res;
    if(dividend>0&&divisor<0 || dividend < 0&&divisor>0){
        sign = 0;
    }
    if(tempA >= Math.pow(2,31)&&tempB===1){
        return sign?Math.pow(2,31)-1:0-Math.pow(2,31);
    }
    function div(a, b){
        if(a < b)return 0;
        let count = 1, temp=b;
        while(temp+b < a){
            count++;
            temp+=b;
        }
        return count + div(a-temp,b);
    }
    res = div(tempA,tempB);
    return sign?res:0-res;

};