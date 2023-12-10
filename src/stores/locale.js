import { writable, get } from 'svelte/store';

const localeRegExp = /[a-z]{2,4}_[A-Z]{2,4}$/;

export const locale = writable('fr_FR');
export const [lang, country] = get(locale).split('_');

/**
 * @param {string} L theme name
 */
export function setLocale(L = 'fr_FR') {
	if (L.match(localeRegExp)) locale.set(L);
}
