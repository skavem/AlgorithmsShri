// https://ru.wikipedia.org/wiki/Решето_Эратосфена

export function primeNumbers(num) {
  const result = [2];
  const sqrt = Math.sqrt(num) | 0;

  const visited = new Set();

  for (let i = 2; i <= num; i++) {
    if (visited.has(i)) continue;
    visited.add(i)

    for (let j = i; j <= num; j += i) {
      visited.add(j);
    }

    result.push(i);
  }

  return result;
}
