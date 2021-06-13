/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
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
 * @return {number}
 */
var minDepth = function(root) {
    let res = Number.MAX_SAFE_INTEGER;
    if(!root) return 0;
    let dfs = function(node, deep){
        if(deep >= res) return;
        if(node.left == null && node.right == null){
            res = Math.min(res, deep);
        }
        node.left&&dfs(node.left, deep+1);
        node.right&&dfs(node.right, deep+1);
    }
    dfs(root, 1);
    return res;
};
// @lc code=end

