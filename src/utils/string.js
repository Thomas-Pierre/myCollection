/**
 * Return a string in lowercase, withe the first letter in uppercase
 * @param {string} string
 * @returns {string}
 */

export function capitalize(string) {
	return string
		.replace(/\W+/gi, ' ')
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
		.replace(/\s+/g, ' ');
}

/**
 * Return a string in camelCase
 * @param {string} string
 * @returns {string}
 */
export function camelCase(string) {
	return string
		.replace(/\W+/gi, ' ')
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
			index === 0 ? word.toLowerCase() : word.toUpperCase()
		)
		.replace(/\s+/g, '');
}
/**
 * Return a string in SnakeCase
 * @param {string} string
 * @returns {string}
 */
export function snakeCase(string) {
	return string
		.replace(/\W+/gi, ' ')
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
		.replace(/\s+/g, '');
}
