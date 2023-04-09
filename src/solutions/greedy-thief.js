function greedyThief(items, n) {
  return [];
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
  console.log(greedyThief(items, n), referenceResult);

  //If more than one valid result, you should return one of them
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
  console.log(greedyThief(items, n), referenceResult);

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
  console.log(greedyThief(items, n), referenceResult);

  //Weights ( prices too ) may be zero
  var items = [{ weight: 0, price: 1 }],
    n = 8,
    referenceResult = [{ weight: 0, price: 1 }];
  console.log(greedyThief(items, n), referenceResult);

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
  console.log(greedyThief(items, n), referenceResult);
}
