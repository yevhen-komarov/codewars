export function greedyThief(items: { weight: number; price: number }[], n: number) {
  const result: { weight: number; price: number }[] = [];
  const arr = [new Array(n + 1).fill(0)];

  for (let i = 1; i <= items.length; i++) {
    arr.push([...arr[i - 1]]);
    const item = items[i - 1];
    for (let j = item.weight; j <= n; j++) {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - item.weight] + item.price);
    }
  }

  const findResult = (i, j) => {
    if (arr[i][j] === 0) return;

    if (arr[i - 1][j] === arr[i][j]) {
      findResult(i - 1, j);
    } else {
      findResult(i - 1, j - items[i - 1].weight);
      result.push(items[i - 1]);
    }
  };

  findResult(items.length, n);

  return result;
}
