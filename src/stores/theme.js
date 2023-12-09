import { writable } from 'svelte/store';

export const theme = writable('default');

/**
 * @param {string} T theme name
 */
export function setTheme(T) {
	theme.set(T);
}
