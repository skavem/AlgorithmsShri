// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function bfs(tree) {
  const stack = [tree];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    result.push(node.val);

    node.left && stack.unshift(node.left);
    node.right && stack.unshift(node.right);
  }

  return result;
}
