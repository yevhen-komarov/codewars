function cycle(n) {
	if (n % 2 == 0 || n % 5 == 0) return -1;

	const lengthN = n.toString().length;
	let remainder = 10 ** (lengthN - 1);

	for (let i = 1; ; i++) {
		remainder = (remainder * 10) % n;
		if (remainder === 1) return i + lengthN - 1;
	}
}

export default cycle;
