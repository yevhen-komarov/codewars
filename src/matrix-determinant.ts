export function determinant(m: number[][]): number {
	if (m.length === 1) return m[0][0];
	return m[0].reduce((s, v, i) => s + (-1) ** (i % 2) * v * determinant(m.filter((v, i) => i !== 0).map((v) => v.filter((vv, vi) => vi !== i))), 0);
}
