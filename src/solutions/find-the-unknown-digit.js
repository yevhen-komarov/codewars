function _solveExpression(exp) {
  let arrExp = exp.replaceAll('--', '+').split('=');
  let op;

  arrExp = [...arrExp[0].split('+'), arrExp[1]];
  if (arrExp.length === 3) {
    op = '+';
  } else {
    arrExp = [...arrExp[0].split('*'), arrExp[1]];
    if (arrExp.length === 3) {
      op = '*';
    } else {
      arrExp = [...arrExp[0].split('-'), arrExp[1]];
      op = '-';
    }
  }

  if (arrExp.length === 4) {
    arrExp.shift();
    arrExp[0] = '' + -arrExp[0];
  }

  for (let d = 0; d < 10; d++) {
    if (exp.includes(d)) continue;

    if (
      !d &&
      arrExp.reduce((a, v) => {
        const b = v.replaceAll('-', '');
        return a || (b.length > 1 && b[0] === '?');
      }, false)
    )
      continue;

    const a = +arrExp[0].replaceAll('?', d);
    const b = +arrExp[1].replaceAll('?', d);
    const c = +arrExp[2].replaceAll('?', d);

    switch (op) {
      case '+':
        if (a + b === c) return d;
        break;
      case '-':
        if (a - b === c) return d;
        break;
      case '*':
        if (a * b === c) return d;
    }
  }

  return -1;
}

function solveExpression(exp) {
  exp = exp.replaceAll('--', '+');

  for (let d = 0; d < 10; d++) {
    if (exp.includes(d)) continue;

    const e = exp.replaceAll('?', d);

    const [left, s] = e.split('=');

    if (!valid(d, s)) continue;

    let arr = left.split('+');
    if (arr.length > 1) {
      if (valid(d, arr[0]) && valid(d, arr[1]) && +arr[0] + +arr[1] === +s) return d;
      continue;
    }

    arr = left.split('*');
    if (arr.length > 1) {
      if (valid(d, arr[0]) && valid(d, arr[1]) && +arr[0] * +arr[1] === +s) return d;
      continue;
    }

    arr = left.split('-');
    if (arr.length === 3) {
      arr.shift();
      arr[0] = '' + -arr[0];
    }

    if (valid(d, arr[0]) && valid(d, arr[1]) && +arr[0] - +arr[1] === +s) return d;
  }

  return -1;
}

function valid(d, n) {
  const x = n.replace('-', '');
  return d || x.length === 1 || x[0] !== '0';
}

export function testSolution() {
  const data = [
    ['1+1=?', 2],
    ['123*45?=5?088', 6],
    ['-5?*-1=5?', 0],
    ['19--45=5?', -1],
    ['??*??=302?', 5],
    ['?*11=??', 2],
    ['-?*11=-??', 2],
    ['??*1=??', 2],
    ['??+??=??', -1],
    ['-25-?=-34', 9],
    ['123?45+?=123?45', 0],
    ['-?56373--9216=-?47157', 8],
  ];

  for (let [exp, expected] of data) console.log(solveExpression(exp), expected);
}
