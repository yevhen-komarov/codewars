function validParentheses(parens) {
	let s = 0;
	for (let v of parens.split('')) {
		s += v === '(' ? 1 : v === ')' ? -1 : 0;
		if (s < 0) return false;
	}
	return s === 0;
}

export function testSolution() {
	console.log(validParentheses('('), false);
	console.log(validParentheses(')'), false);
	console.log(validParentheses(''), true);
	console.log(validParentheses('()'), true);
	console.log(validParentheses('())'), false);

	console.log(validParentheses('()'), true);
	console.log(validParentheses(')(()))'), false);
	console.log(validParentheses('('), false);
	console.log(validParentheses('(())((()())())'), true);
}
