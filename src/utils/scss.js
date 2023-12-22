export function getVarsFromFile(file) {
	const result = {};

	import(file).then(({ default: scss }) => {
		for (const [, key, color] of scss.matchAll(/([a-zA-Z0-9]+)\s*:\s*#([0-9a-fA-F]{6});/g)) {
			result[key] = `#${color}`;
		}
	});

	return result;
}
