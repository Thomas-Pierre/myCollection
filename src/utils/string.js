/**
 * Return a string in lowercase, withe the first letter in uppercase
 * @param {string} string
 * @returns {string}
 */
export function capitalize(string) {
	return string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}
