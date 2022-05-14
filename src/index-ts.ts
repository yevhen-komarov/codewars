// @ts-ignore
//import calc from './solutions/mathematical-expression.ts';

//console.log(calc('(15+3)*2'));
//console.log('hello me 12');

import { determinant } from './solutions/matrix-determinant.ts';

console.log(determinant([[1]]));

console.log(
	determinant([
		[1, 3],
		[2, 5],
	])
);

console.log(
	determinant([
		[2, 5, 3],
		[1, -2, -1],
		[1, 3, 4],
	])
);
