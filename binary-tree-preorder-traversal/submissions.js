/**
题目：二叉树的前序遍历
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var preorderTraversal = function(root) {
//     let res = [];
//     let dfs = function(node){
//         if(node){
//             res.push(node.val);
//             dfs(node.left);
//             dfs(node.right);
//         }
//     }
//     dfs(root);
//     return res;
// };
// 迭代
var preorderTraversal = function(root) {
    let arr = [root], res = [];
    if(!root)return res;
    while(arr.length > 0){
        let node = arr.pop();
        res.push(node.val);
        node.right&&arr.push(node.right);
        node.left&&arr.push(node.left);
    }
    return res;
};