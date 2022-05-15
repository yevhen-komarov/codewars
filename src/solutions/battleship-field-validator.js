export function validateBattlefield(field) {
	if (field.reduce((a, b) => a + b.reduce((a, b) => a + b, 0), 0) !== 20) return false;

	let count = [0, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0];

	for (let y = 0; y < 10; y++) {
		for (let m of field[y].join('').match(/1{2,}/g) || []) {
			if (count[m.length] === 0) return false;
			count[m.length] -= 1;
		}
	}

	for (let x = 0; x < 10; x++) {
		for (let m of field.reduce((a, b) => a + b[x].toString(), '').match(/1{2,}/g) || []) {
			if (count[m.length] === 0) return false;
			count[m.length] -= 1;
		}
	}

	let queue = [{ x: 0, y: 0 }];
	let directions = [
		{ x: -1, y: 0 },
		{ x: 0, y: -1 },
		{ x: 1, y: 0 },
		{ x: 0, y: 1 },
		{ x: -1, y: 0 },
	];

	while (queue.length) {
		const point = queue.shift();
		const cell = field[point.x][point.y];

		if (cell === -1) continue;
		field[point.x][point.y] = -1;

		for (let i = 0; i < 4; i++) {
			const pointA = { x: point.x + directions[i].x, y: point.y + directions[i].y };

			if (onBoard(pointA)) {
				const pointB = { x: point.x + directions[i + 1].x, y: point.y + directions[i + 1].y };

				if (onBoard(pointB)) {
					//console.log(pointA, pointB);
					if (field[pointA.x][pointA.y] === 1 && field[pointB.x][pointB.y] === 1) return false;
				}
				if (field[pointA.x][pointA.y] === 0) queue.push(pointA);
			}
		}
	}
	return true;
}

function onBoard(point) {
	return point.x >= 0 && point.x <= 9 && point.y >= 0 && point.y <= 9;
}
