/**
	题目：填充每个节点的下一个右侧节点指针
	给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

	struct Node {
	  int val;
	  Node *left;
	  Node *right;
	  Node *next;
	}
	填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

	初始状态下，所有 next 指针都被设置为 NULL。
*/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
    let b = [];
    let dfs = function(node, index) {
        if(!node)return;
        if(b[index]){
            b[index].next = node;
        }
        b[index] = node;
        dfs(node.left, index+1);
        dfs(node.right, index+1);
    }
    dfs(root, 0);
    return root;
};