/**
	题目：字母异位词分组
	给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

	示例:

	输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
	输出:
	[
	  ["ate","eat","tea"],
	  ["nat","tan"],
	  ["bat"]
	]
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let len = strs.length, m={},res=[];
    for(let i=0;i<len;i++){
        let s = [...strs[i]].sort().join("");
        if(m[s]){
            m[s].push(strs[i]);
        }else{
            m[s] = [strs[i]]
        }
    }
    for(let key in m){
        res.push(m[key]);
    }
    return res;
};