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
var getMinimumDifference = function(root) {
    let res = Number.MAX_SAFE_INTEGER, pre = -1;
    const search = function(node){
        node.left&&(search(node.left))
        if(pre === -1){
            pre = node.val;
        }else{
            res = Math.min(res, node.val - pre);
            pre = node.val;
        }
        node.right&&(search(node.right))
    }
    search(root);
    return res;
};