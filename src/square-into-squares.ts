const decompose1 = (n: number): number[] => {
  let sqr: number = n * n;
  let queue: { sum: number; last: number; result: number[] }[] = [{ sum: 0, last: n, result: [] }];

  //queue = [{ sum: 2450, last: 7, result: [7, 49] }];

  while (queue.length) {
    let element = queue.shift();
    if (!element) break;
    console.log(element);

    const end = sqr - element.sum;
    console.log(end);

    const sqrtEnd = Math.sqrt(end);
    console.log(sqrtEnd);

    for (let i: number = Math.min(Math.ceil(sqrtEnd), element.last - 1); i >= 2; i--) {
      if (end - i * i === 1) return [1, i, ...element.result];
      if (end - i * i === 0) return [i, ...element.result];
      queue.push({ sum: element.sum + i * i, last: i, result: [i, ...element.result] });
      console.log(queue[queue.length - 1]);
    }
    //break;
  }

  return [];
};

export const decompose = (n: number, d: number = n * n): number[] => {
  for (let m: number = Math.min(Math.floor(Math.sqrt(d)), n - 1); m >= 1; m--) {
    if (m * m === d) return [m];

    let result: number[] = decompose(m, d - m * m) || [];
    if (d === m * m + result.reduce((s, v) => s + v * v, 0)) return [...result, m];
  }

  return [];
};
