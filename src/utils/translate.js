// @ts-nocheck
import { get } from 'svelte/store';
import { locale } from '@stores/local';
import { getDeep } from '@utils';

import fallback from '@src/translations/fr_FR.json';

const translations = (await import(`@src/translations/${get(locale)}.json`).default) || fallback;

/**
 * @param {string} string
 * @param {(string|number)[]} params
 * @returns {string}
 */
export function translate(string = '', params = []) {
	let translatedString = getDeep(translations, string, string);

	if (Array.isArray(params)) {
		for (const i in params) {
			translatedString = translatedString?.replace(new RegExp(`{[${i}]}`, 'gi'), params[i]);
		}
	}

	return translatedString;
}
