/**
    题目：
    给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

    注意：答案中不可以包含重复的三元组。

     

    示例：

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     nums = nums.sort(function(a,b){return a-b;});
//     var i,j,k,temp,res=[];
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             for(k=j+1;k<nums.length;k++){
//                 if(k == i || k == j)continue;
//                 if(nums[k] + nums[i] +nums[j] == 0){
//                     temp = [nums[i],nums[j],nums[k]].sort(function(a,b){
//                         return a-b;
//                     });
//                     if(judgeRepeat(temp)){
//                         res.push(temp);
//                     }

//                 }
//                 if(nums[k] + nums[i] +nums[j] >= 0)break;
//             }
//         }
//     }
//     function judgeRepeat(data){
//         for(var i=0;i<res.length;i++){
//             if(res[i][0] == data[0] && res[i][1] == data[1] && res[i][2] == data[2]){
//                 return false;
//             }
//         }
//         return true;
//     }

//     return res;
// };
/**
* @param {number[]} nums
* @return {number[][]}
*/
// var threeSum = function(nums) {
//     nums = nums.sort(function(a,b){return a-b;});

//     var twoNums={},i,j,temp,res=[];
//     if(nums.length<3)return res;
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             temp = nums[i]+nums[j];
//             if(twoNums[temp]){
//                 if(judgeTwo(twoNums[temp],[i, j])){
//                     twoNums[temp].push([i, j])
//                 }

//             }else{
//                 twoNums[temp] = [[i, j]];
//             }
//             if(temp + nums[0] >= 0)break;
//         }
//     }
//     for(i=0;i<nums.length;i++){
//         if(twoNums[0-nums[i]]){
//             for(j=0;j<twoNums[0-nums[i]].length;j++){
//                 if(i == twoNums[0-nums[i]][j][0] || i == twoNums[0-nums[i]][j][1])continue;
//                 temp = [nums[twoNums[0-nums[i]][j][0]], nums[twoNums[0-nums[i]][j][1]], nums[i]].sort(function(a,b){return a-b;});
//                 if(judgeRepeat(temp)){
//                     res.push(temp);
//                 }
//             }
//         }
//     }
//     function judgeRepeat(data){
//         for(var i=0;i<res.length;i++){
//             if(res[i][0] == data[0] && res[i][1] == data[1] && res[i][2] == data[2]){
//                 return false;
//             }
//         }
//         return true;
//     }
//     function judgeTwo(source, data){
//         for(var i=0;i<source.length;i++){
//             if(source[i][0] == data[0] && source[i][1] == data[1]){
//                 return false;
//             }
//         }
//         return true;
//     }

//     return res;
// };

// 双指针方法
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b)
    console.log(nums);
    if (nums[0] <= 0 && nums[length - 1] >= 0) {
        for (let i = 0; i < length - 2;) {
            if (nums[i] > 0) break;
            let first = i + 1
            let last = length - 1
            do {
                if (first >= last || nums[i] * nums[last] > 0) break
                let result = nums[i] + nums[first] + nums[last]
                if (result === 0) {
                    res.push([nums[i], nums[first], nums[last]])
                }
                if (result <= 0) {
                    while (first < last && nums[first] === nums[++first]) { }
                } else {
                    while (first < last && nums[last] === nums[--last]) { }
                }
            } while (first < last)
            while (nums[i] === nums[++i]) { }
        }
    }
    return res
}
console.log(threeSum([-1,0,1,2,-1,-4,-1,1,0,2,3,-2]))
