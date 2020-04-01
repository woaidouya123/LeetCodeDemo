/**
	题目：有效括号的嵌套深度
	给你一个「有效括号字符串」 seq，请你将其分成两个不相交的有效括号字符串，A 和 B，并使这两个字符串的深度最小。

	不相交：每个 seq[i] 只能分给 A 和 B 二者中的一个，不能既属于 A 也属于 B 。
	A 或 B 中的元素在原字符串中可以不连续。
	A.length + B.length = seq.length
	深度最小：max(depth(A), depth(B)) 的可能取值最小。 
	划分方案用一个长度为 seq.length 的答案数组 answer 表示，编码规则如下：

	answer[i] = 0，seq[i] 分给 A 。
	answer[i] = 1，seq[i] 分给 B 。
	如果存在多个满足要求的答案，只需返回其中任意 一个 即可。
*/
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let s1 = s2 = 0,res=[];
    for(let i=0;i<seq.length;i++){
        if(seq[i] === '('){
            if(s1 <= s2){
                s1++;
                res.push(0);
            }else{
                s2++;
                res.push(1);
            }
        }else{
            if(s1 <= s2){
                s2--;
                res.push(1);
            }else{
                s1--;
                res.push(0);
            }
        }
    }
    return res;
};