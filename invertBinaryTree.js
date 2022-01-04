const invertBinTree = (root) => {
  if (!root) return null;

  const tempLeft = invertBinTree(root.left);
  const tempRight = invertBinTree(root.right);

  root.right = tempLeft;
  root.left = tempRight;

  return root;
};
