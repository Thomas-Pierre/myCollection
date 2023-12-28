/**
 * Get a value of an object by its path
 * @param {object} object
 * @param {string} path
 * @param {any} defaultValue
 * @return {any}
 */
export function getDeep(object, path, defaultValue) {
	return path.split('.').reduce((acc, currentPath) => acc?.[currentPath] || defaultValue, object);
}

/**
 * Get a value of an object by its path
 * @param {number} length
 * @returns {string}
 */
export function randomID(length = 12) {
	const digits = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
	let ID = '';
	for (const _ of new Array(length)) ID += digits[Math.floor(Math.random() * digits.length)];
	return ID;
}
