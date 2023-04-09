function greedyThief(items, n) {
  const result = [];
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

export function testSolution() {
  //example in description
  var items = [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 6, price: 5 },
      { weight: 5, price: 4 },
      { weight: 4, price: 6 },
    ],
    n = 10,
    referenceResult = [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 4, price: 6 },
    ];
  console.log(greedyThief(items, n), referenceResult);

  //should get the max total price
  var items = [
      { weight: 9, price: 1 },
      { weight: 9, price: 2 },
      { weight: 9, price: 3 },
      { weight: 9, price: 4 },
      { weight: 9, price: 5 },
    ],
    n = 10,
    referenceResult = [{ weight: 9, price: 5 }];
  // console.log(greedyThief(items, n), referenceResult);

  // If more than one valid result, you should return one of them
  var items = [
      { weight: 1, price: 1 },
      { weight: 2, price: 2 },
      { weight: 3, price: 3 },
      { weight: 4, price: 4 },
      { weight: 5, price: 5 },
    ],
    n = 10,
    referenceResult = [
      { weight: 2, price: 2 },
      { weight: 3, price: 3 },
      { weight: 5, price: 5 },
    ];
  // console.log(greedyThief(items, n), referenceResult);

  var items = [
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
      { weight: 5, price: 5 },
    ],
    n = 10,
    referenceResult = [
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
    ];
  // console.log(greedyThief(items, n), referenceResult);

  //Weights ( prices too ) may be zero
  var items = [{ weight: 0, price: 1 }],
    n = 8,
    referenceResult = [{ weight: 0, price: 1 }];
  // console.log(greedyThief(items, n), referenceResult);

  //If no valid solution should return []
  var items = [
      { weight: 9, price: 1 },
      { weight: 9, price: 2 },
      { weight: 9, price: 3 },
      { weight: 9, price: 4 },
      { weight: 9, price: 5 },
    ],
    n = 8,
    referenceResult = [];
  // console.log(greedyThief(items, n), referenceResult);

  var items = [
      { weight: 20, price: 22 },
      { weight: 10, price: 79 },
      { weight: 20, price: 92 },
      { weight: 8, price: 22 },
      { weight: 11, price: 29 },
      { weight: 20, price: 63 },
      { weight: 0, price: 45 },
      { weight: 7, price: 93 },
      { weight: 1, price: 16 },
      { weight: 16, price: 76 },
      { weight: 16, price: 30 },
      { weight: 15, price: 28 },
      { weight: 2, price: 83 },
      { weight: 13, price: 23 },
    ],
    n = 80,
    referenceResult = [
      { weight: 10, price: 79 },
      { weight: 20, price: 92 },
      { weight: 20, price: 63 },
      { weight: 0, price: 45 },
      { weight: 7, price: 93 },
      { weight: 1, price: 16 },
      { weight: 16, price: 76 },
      { weight: 2, price: 83 },
    ];
  // console.log(greedyThief(items, n), referenceResult);

  var items = [
      { weight: 5, price: 37 },
      { weight: 3, price: 61 },
      { weight: 7, price: 29 },
      { weight: 5, price: 75 },
      { weight: 17, price: 12 },
      { weight: 9, price: 0 },
      { weight: 4, price: 88 },
      { weight: 19, price: 96 },
      { weight: 3, price: 57 },
      { weight: 19, price: 4 },
      { weight: 19, price: 4 },
      { weight: 0, price: 16 },
      { weight: 15, price: 97 },
      { weight: 18, price: 75 },
      { weight: 19, price: 3 },
      { weight: 2, price: 95 },
      { weight: 19, price: 6 },
      { weight: 20, price: 42 },
      { weight: 16, price: 5 },
      { weight: 16, price: 96 },
      { weight: 2, price: 32 },
      { weight: 15, price: 16 },
      { weight: 17, price: 23 },
      { weight: 10, price: 89 },
      { weight: 9, price: 54 },
      { weight: 9, price: 92 },
      { weight: 10, price: 89 },
      { weight: 9, price: 26 },
      { weight: 11, price: 96 },
      { weight: 19, price: 16 },
      { weight: 14, price: 26 },
      { weight: 15, price: 31 },
      { weight: 2, price: 46 },
      { weight: 7, price: 79 },
      { weight: 1, price: 4 },
      { weight: 7, price: 19 },
      { weight: 1, price: 68 },
      { weight: 15, price: 51 },
      { weight: 10, price: 39 },
    ],
    n = 209,
    referenceResult = [];

  // console.log(greedyThief(items, n), referenceResult);

  var items = [
      { weight: 19, price: 59 },
      { weight: 9, price: 28 },
      { weight: 1, price: 11 },
      { weight: 13, price: 51 },
      { weight: 18, price: 31 },
      { weight: 11, price: 93 },
      { weight: 6, price: 80 },
      { weight: 11, price: 78 },
      { weight: 20, price: 92 },
      { weight: 6, price: 31 },
      { weight: 20, price: 60 },
      { weight: 1, price: 57 },
      { weight: 10, price: 10 },
      { weight: 12, price: 81 },
      { weight: 12, price: 100 },
      { weight: 15, price: 85 },
      { weight: 13, price: 6 },
      { weight: 5, price: 87 },
      { weight: 4, price: 31 },
      { weight: 11, price: 60 },
      { weight: 6, price: 83 },
      { weight: 8, price: 94 },
      { weight: 8, price: 100 },
      { weight: 16, price: 55 },
      { weight: 19, price: 87 },
      { weight: 11, price: 11 },
      { weight: 3, price: 34 },
      { weight: 17, price: 95 },
    ],
    n = 153,
    referenceResult = [];

  // console.log(greedyThief(items, n), referenceResult);

  var items = [
      { weight: 0, price: 81 },
      { weight: 11, price: 44 },
      { weight: 16, price: 10 },
      { weight: 5, price: 62 },
      { weight: 18, price: 93 },
      { weight: 2, price: 78 },
      { weight: 16, price: 25 },
      { weight: 10, price: 68 },
      { weight: 8, price: 91 },
      { weight: 13, price: 65 },
      { weight: 6, price: 43 },
      { weight: 19, price: 65 },
      { weight: 2, price: 33 },
      { weight: 18, price: 10 },
      { weight: 18, price: 28 },
      { weight: 12, price: 8 },
      { weight: 20, price: 22 },
      { weight: 15, price: 54 },
      { weight: 9, price: 62 },
      { weight: 5, price: 75 },
      { weight: 9, price: 6 },
      { weight: 13, price: 38 },
      { weight: 15, price: 52 },
      { weight: 7, price: 16 },
      { weight: 13, price: 43 },
      { weight: 18, price: 61 },
      { weight: 3, price: 50 },
      { weight: 13, price: 54 },
      { weight: 1, price: 25 },
      { weight: 9, price: 12 },
      { weight: 12, price: 29 },
      { weight: 5, price: 12 },
      { weight: 1, price: 62 },
      { weight: 14, price: 20 },
      { weight: 9, price: 38 },
      { weight: 17, price: 76 },
      { weight: 8, price: 3 },
      { weight: 3, price: 71 },
      { weight: 3, price: 44 },
      { weight: 12, price: 21 },
      { weight: 0, price: 10 },
      { weight: 17, price: 17 },
      { weight: 12, price: 57 },
      { weight: 13, price: 23 },
    ],
    n = 225,
    referenceResult = [
      { weight: 0, price: 81 },
      { weight: 11, price: 44 },
      { weight: 5, price: 62 },
      { weight: 18, price: 93 },
      { weight: 2, price: 78 },
      { weight: 10, price: 68 },
      { weight: 8, price: 91 },
      { weight: 13, price: 65 },
      { weight: 6, price: 43 },
      { weight: 2, price: 33 },
      { weight: 15, price: 54 },
      { weight: 9, price: 62 },
      { weight: 5, price: 75 },
      { weight: 13, price: 38 },
      { weight: 15, price: 52 },
      { weight: 13, price: 43 },
      { weight: 18, price: 61 },
      { weight: 3, price: 50 },
      { weight: 13, price: 54 },
      { weight: 1, price: 25 },
      { weight: 1, price: 62 },
      { weight: 9, price: 38 },
      { weight: 17, price: 76 },
      { weight: 3, price: 71 },
      { weight: 3, price: 44 },
      { weight: 0, price: 10 },
      { weight: 12, price: 57 },
    ];
  console.log(greedyThief(items, n), referenceResult);
}
