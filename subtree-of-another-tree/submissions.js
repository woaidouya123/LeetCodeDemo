/**
	题目：另一个树的子树
	给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

	示例 1:
	给定的树 s:

	     3
	    / \
	   4   5
	  / \
	 1   2
	给定的树 t：

	   4 
	  / \
	 1   2
	返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

	示例 2:
	给定的树 s：

	     3
	    / \
	   4   5
	  / \
	 1   2
	    /
	   0
	给定的树 t：

	   4
	  / \
	 1   2
	返回 false。
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let res = false;
    function judge(t1, t2){
        if(t1 == null && t2 == null)return true;
        if(t1==null&&t2!=null || t1!=null&&t2==null || t1.val != t2.val)return false;
        return judge(t1.left, t2.left)&&judge(t1.right, t2.right);
    }
    function df(node, target){
        if(node == null || res)return;
        if(node.val === target.val){
            res = res || judge(node, target);
        }
        df(node.left, target);
        df(node.right, target)
    }
    df(s, t);
    return res;
};