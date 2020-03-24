/**
	题目：通配符匹配
	给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

	'?' 可以匹配任何单个字符。
	'*' 可以匹配任意字符串（包括空字符串）。
	两个字符串完全匹配才算匹配成功。

	说明:

	s 可能为空，且只包含从 a-z 的小写字母。
	p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/(\*)(\*)*/g,"$1");
    let slen = s.length, plen = p.length,m={};
    function parse(pIndex,sIndex){
        if(m[pIndex]){
            if(m[pIndex].indexOf(sIndex) > -1)return false;
            else m[pIndex].push(sIndex);
        }else{
            m[pIndex] = [sIndex];
        }
        if(sIndex >= slen && (pIndex >= plen || /^\*+$/.test(p.substr(pIndex))))return true;
        if(sIndex >= slen || sIndex < slen && pIndex >= plen)return false;
        if(p[pIndex] === "?"){
            return parse(pIndex+1,sIndex+1);
        }else if(p[pIndex] === "*"){
            return parse(pIndex,sIndex+1) || parse(pIndex+1,sIndex+1) || parse(pIndex+1,sIndex);
        }else{
            if(p[pIndex] === s[sIndex])
                return parse(pIndex+1,sIndex+1);
            else
                return false;
        }

    }
    return parse(0,0);
};
console.log(isMatch("babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab","***"))