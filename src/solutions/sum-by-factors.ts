function sumOfDivided(lst: number[]): number[][] {
	let result: number[][] = [];

	for (let i: number = 2; i <= Math.max(Math.max(...lst), -Math.min(...lst)); i++) {
		let flag: number = 1;

		if (i > 2 && i % 2 != 0) {
			for (let j: number = 3; j * j <= i; j = j + 2) {
				if (i % j === 0) {
					flag = 0;
					break;
				}
			}
		} else if (i !== 2) {
			flag = 0;
		}

		if (flag === 1) {
			const base = lst.filter((v) => Math.max(v, -v) >= i && v % i === 0);
			if (base.length) result.push([i, base.reduce((s, v) => s + v, 0)]);
		}
	}

	return result;
}

export function testSolution(): any {
	// console.log(sumOfDivided([12, 15]), [
	// 	[2, 12],
	// 	[3, 27],
	// 	[5, 15],
	// ]);
	// console.log(sumOfDivided([15, 21, 24, 30, 45]), [
	// 	[2, 54],
	// 	[3, 135],
	// 	[5, 90],
	// 	[7, 21],
	// ]);

	//console.log(sumOfDivided([15, 21, 24, 30, -45]));
	console.log(sumOfDivided([-29804, -4209, -28265, -72769, -31744]));
}
