export function nextBigger(n: number): number {
	let a: string[] = n.toString().split('');

	if (+[...a].reverse().sort().reverse().join('') === n) return -1;

	for (var i: number = a.length - 1; i > 1; i--) {
		if (a[a.length - 1] > a[i - 1]) break;
		a = [...a.slice(0, i - 1), ...a.slice(i - 1).sort()];
	}

	let o: number = a.slice(i - 1).findIndex((v) => v > a[i - 1]);
	a = [...a.slice(0, i - 1), a[i + o - 1], ...a.slice(i, i + o - 1), a[i - 1], ...a.slice(i + o)];

	return +a.join('');
}
