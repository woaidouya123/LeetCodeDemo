/**
题目：完全二叉树的节点个数
给出一个完全二叉树，求出该树的节点个数。

说明：

完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

示例:

输入: 
    1
   / \
  2   3
 / \  /
4  5 6

输出: 6
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
 * @return {number}
 */
var countNodes = function(root) {
    let maxdeep = 1, count = 0;
    let dfs = function(node, deep){
        maxdeep = Math.max(maxdeep,deep);
        if(deep===maxdeep&&!node.left&&!node.right){
            count++;
        }
        node.left&&dfs(node.left, deep+1);
        node.right&&dfs(node.right, deep+1);
    }
    root&&dfs(root, 1)
    return new Array(maxdeep-1).fill(0).map((v,i)=>Math.pow(2,i)).reduce((a,b)=>a+b,0)+count;
};