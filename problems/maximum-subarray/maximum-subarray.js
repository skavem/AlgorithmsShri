// https://leetcode.com/problems/maximum-subarray/

export function maximumSubarray(arr) {
  const dp = []

  dp[0] = arr[0]
  for (let i = 1; i < arr.length; i++) {
    dp[i] = (dp[i-1] > 0 ? dp[i-1] : 0) + arr[i];
  }

  return Math.max(...dp)
}
