function fourPass(stations) {
	//your code goes here. you can do it!
	return getRoute(stations);
}

function getRoute(stations) {
	const variantsDirections = [
		[10, -10, 1, -1],
		[10, -10, -1, 1],
		[10, 1, -1, -10],
		[10, 1, -10, -1],
		[10, -1, 1, -10],
		[10, -1, -10, 1],
		[1, -10, 10, -1],
		[1, -10, -1, 10],
		[1, 10, -1, -10],
		[1, 10, -10, -1],
		[1, -1, 10, -10],
		[1, -1, -10, 10],
		[-1, -10, 10, 1],
		[-1, -10, 1, 10],
		[-1, 10, 1, -10],
		[-1, 10, -10, 1],
		[-1, 1, 10, -10],
		[-1, 1, -10, 10],
		[-10, 10, 1, -1],
		[-10, 10, -1, 1],
		[-10, 1, -1, 10],
		[-10, 1, 10, -1],
		[-10, -1, 1, 10],
		[-10, -1, 10, 1],
	];
	const variants = [
		[1, 2, 3],
		[1, 3, 2],
		[2, 1, 3],
		[2, 3, 1],
		[3, 1, 2],
		[3, 2, 1],
	];

	let minRoute = null;

	for (let vd = 0; vd < variantsDirections.length; vd++) {
		let directions = variantsDirections[vd];
		for (let r = 0; r < 2; r++) {
			for (let v = 0; v < variants.length; v++) {
				const segments = variants[v];

				let partsRoute = [[], [], []];

				for (let s = 0; s < 3; s++) {
					const start = r === 0 ? stations[segments[s] - 1] : stations[segments[s]];
					const finish = r === 0 ? stations[segments[s]] : stations[segments[s - 1]];

					let parents = Array(99);
					let passed = Array(99);
					//console.log(start, finish);

					let queue = [start];
					while (queue.length) {
						const point = queue.shift();

						for (let d = 0; d < 4; d++) {
							const next = point + directions[d];

							// off board
							if (next < 0 || next > 99 || !(point % 10 === next % 10 || Math.floor(point / 10) === Math.floor(next / 10))) continue;

							// station
							if (stations.includes(next) && next != finish) continue;

							// in route
							if (next != finish && next != start && (partsRoute[0].includes(next) || partsRoute[1].includes(next) || partsRoute[2].includes(next)))
								continue;

							// passed
							if (passed[next]) continue;

							passed[next] = true;
							parents[next] = point;

							// finish
							if (next === finish) break;

							queue.push(next);
							//console.log(next);
						}
					}

					parent = parents[finish];
					if (!parent) {
						partsRoute = null;
						break;
					}

					partsRoute[segments[s] - 1].push(finish);
					do {
						r === 0 ? partsRoute[segments[s] - 1].unshift(parent) : partsRoute[segments[s] - 1].push(parent);
						parent = parents[parent];
					} while (parent != undefined);
				}

				//console.log(partsRoute);

				if (!partsRoute) continue;

				partsRoute[1].shift();
				partsRoute[2].shift();
				let route = [...partsRoute[0], ...partsRoute[1], ...partsRoute[2]];
				if (!minRoute || minRoute.length > route.length) {
					minRoute = route;
				}
			}
		}
	}
	return minRoute;
}

//if you prefer to see an overhead view of the factory floor with any failed test results, uncomment the line below:
show_graph_debug = true;
