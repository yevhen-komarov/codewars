export function calc(expression: string): number {
	return +calcExpression(expression);
}

function calcExpression(expression: string): string {
	let temp: string = '';

	while (temp !== expression) {
		temp = expression;
		expression = expression.replace(/-\([^\(\)]+\)/g, (m) => (-calcExpression(m.substring(2, m.length - 1))).toString());
	}
	temp = '';
	while (temp !== expression) {
		temp = expression;
		expression = expression.replace(/\([^\(\)]+\)/g, (m) => calcExpression(m.substring(1, m.length - 1)));
	}

	expression = calcBinaryOperator(expression, '/');
	expression = calcBinaryOperator(expression, '*');
	expression = calcBinaryOperator(expression, '-');
	expression = calcBinaryOperator(expression, '+');

	return expression;
}

function calcBinaryOperator(expression: string, operator: string): string {
	return expression.replace(new RegExp(`(?<=^|\\s?)-?\\d+(\\.\\d+)?\\s?\\${operator}\\s?-?\\d+(\\.\\d+)?`), (match) => {
		let a = match.split(new RegExp(`(?<=\\d\\s*)\\${operator}`));
		switch (operator) {
			case '*':
				return (+a[0] * +a[1]).toString();
			case '/':
				return (+a[0] / +a[1]).toString();
			case '+':
				return (+a[0] + +a[1]).toString();
			case '-':
				return (+a[0] - +a[1]).toString();
			default:
				return '';
		}
	});
}
