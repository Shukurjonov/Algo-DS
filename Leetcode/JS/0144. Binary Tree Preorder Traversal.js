function preorderTraversal(root) {
  if(!root) return [];
  let res = [];
  let stack = [root];
  while(stack.length){
      let node = stack.pop();
      res.push(node.val);
      if(node.right) stack.push(node.right);
      console.log(node.right)
      if(node.left) stack.push(node.left);
      console.log(node.left)
  }
  return res;
};