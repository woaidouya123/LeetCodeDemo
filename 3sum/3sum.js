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
var threeSum = function(nums) {
    nums = nums.sort(function(a,b){return a-b;});
    var i,j,k,temp,res=[];
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            for(k=j+1;k<nums.length;k++){
                if(k == i || k == j)continue;
                if(nums[k] + nums[i] +nums[j] == 0){
                    temp = [nums[i],nums[j],nums[k]].sort(function(a,b){
                        return a-b;
                    });
                    if(judgeRepeat(temp)){
                        res.push(temp);
                    }

                }
                if(nums[k] + nums[i] +nums[j] >= 0)break;
            }
        }
    }
    function judgeRepeat(data){
        for(var i=0;i<res.length;i++){
            if(res[i][0] == data[0] && res[i][1] == data[1] && res[i][2] == data[2]){
                return false;
            }
        }
        return true;
    }

    return res;
};
console.log(threeSum([-1,0,1,2,-1,-4,-1,1,0,2,3,-2]))
