/**
	题目：二叉树的右视图

	给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

	示例:

	输入: [1,2,3,null,5,null,4]
	输出: [1, 3, 4]
	解释:

	   1            <---
	 /   \
	2     3         <---
	 \     \
	  5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [], max = -1;
    function find(node, deep){
        if(node == null)return;
        if(deep > max){
            res.push(node.val);
            max = deep;
        }
        find(node.right, deep+1);
        find(node.left, deep+1);
    }
    find(root, 0);
    return res;
};