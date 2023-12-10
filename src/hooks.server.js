import { theme } from './stores/theme';
import { lang } from '@src/stores/locale';
import { get } from 'svelte/store';

export const handle = async ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				// Set data-theme to the <body/>
				.replace(/data-theme="%theme%"/g, `data-theme="${get(theme)}"`)

				// Set lang attribute to the <html/>
				.replace(/lang="([a-z]{1,5})"/g, `lang="${lang}"`)
	});
