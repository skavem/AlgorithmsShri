// https://leetcode.com/problems/valid-parentheses/

const closings = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const openings = new Set(['(', '[', '{'])

export function isValid(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i]

    if (openings.has(ch)) {
      stack.push(ch)
      continue
    }

    if (closings[str[i]] !== stack.pop()) {
      return false
    }
  }

  return stack.length === 0
}
