/**
 * Get a value of an object by its path
 * @param {any} object
 * @param {string} path
 * @param {any} defaultValue
 */
export function getDeep(object, path, defaultValue) {
	return path.split('.').reduce((acc, currentPath) => acc?.[currentPath] || defaultValue, object);
}
