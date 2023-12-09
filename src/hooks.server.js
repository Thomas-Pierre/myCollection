import { lang } from '@stores/local';

export const handle = async ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace(/lang="([a-z]{1,5})"/g, `lang="${lang}"`)
	});
