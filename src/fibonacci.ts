export function fibonacci(number) {
  function fibonacciInner(number) {
    if (number === 0) {
      return [0];
    } else if (number === 1) {
      return [0, 1];
    } else {
      let values = fibonacciInner(number - 1);
      values.push(values[values.length - 1] + values[values.length - 2]);
      return values;
    }
  }

  return fibonacciInner(number);
}
