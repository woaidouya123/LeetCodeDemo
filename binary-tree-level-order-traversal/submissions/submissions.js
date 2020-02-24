/**
    题目:
    给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    function bl(node, level){
        if(node != null){
            if(res[level]){
                res[level].push(node.val);
            }else{
                res[level] = [node.val];
            }
            bl(node.left, level+1);
            bl(node.right, level+1);
        }
    }
    bl(root, 0);
    return res;
};
