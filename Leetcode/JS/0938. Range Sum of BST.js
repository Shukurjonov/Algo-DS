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
* @param {number} low
* @param {number} high
* @return {number}
*/
let ans
function rangeSumBST (root, low, high) {
  ans = 0;
  dfs(root, low, high);
  return ans;
};

function dfs(node, L, R) {
  if (node != null) {
    if (L <= node.val && node.val <= R)
      ans += node.val;
    if (L < node.val)
      dfs(node.left, L, R);
    if (node.val < R)
      dfs(node.right, L, R);
  }
}