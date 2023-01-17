function isSameTree(p, q) {
  let resP = [];
  let resQ = [];
  dfs(p, resP);
  dfs(q, resQ);
  return _.isEqual(resP,resQ);
};

const dfs = (root, res) => {
   if (root === null) return [];
   let stack = [];
   stack.push(root);
   while (stack.length > 0) {
       const current = stack.pop();
       res.push(current.val);
       if (current.left) stack.push(current.left);
       if (current.right) stack.push(current.right);
       else res.push(0);
   }
}

/* 
function isSameTree(p, q) {
  if (p && q && p.val == q.val) 
    return self.isSameTree(p.left, q.left) && self.isSameTree(p.right, q.right)  
  if (!p && !q) return true
  else return false
}

    */

