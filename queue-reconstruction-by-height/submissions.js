/**
题目：根据身高重建队列
假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。

注意：
总人数少于1100人。

示例

输入:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

输出:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let len = people.length, m = {}, n = [], res = [];
    for(let i=0;i<len;i++){
        if(n.indexOf(people[i][0]) > -1){
            m[people[i][0]].push(people[i][1]);
        }else{
            n.push(people[i][0]);
            m[people[i][0]] = [people[i][1]];
        }
    }
    n = n.sort((a,b)=>b-a);
    for(let i=0;i<n.length;i++){
        let t = m[n[i]].sort((a,b)=>a-b)
        for(let j=0;j<t.length;j++){
            res.splice(t[j],0,[n[i],t[j]])
        }
    }
    return res;
    
};