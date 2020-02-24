/**
    题目：
    给定一个二叉树，检查它是否是镜像对称的。

    例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

        1
       / \
      2   2
     / \ / \
    3  4 4  3
    但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

      1
     / \
    2   2
     \   \
      3    3
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：镜像对比
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return search(root,root);
    function search(node1,node2){
        if(node1 == null && node2 == null)return true;
        if(node1 == null || node2 == null)return false;
        if(node1.val != node2.val)return false;
        return search(node1.left, node2.right) && search(node1.right, node2.left);
    }
};
