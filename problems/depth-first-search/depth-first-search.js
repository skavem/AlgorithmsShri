// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_глубину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function dfs(tree) {
  const stack = [tree];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    result.push(node.val);

    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return result;
}
