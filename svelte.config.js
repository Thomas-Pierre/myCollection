import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `
				@import './src/styles/variables';
				@import './src/styles/mixins';
				@import './src/styles/functions';
			`
		}
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: false
		}),
		alias: {
			'@src': './src',
			'@styles': './src/styles',
			'@utils': './src/utils',
			'@stores': './src/stores',
			'@components': './src/components',
			'@data': './src/data',
			'@modules': './node_modules'
		}
	}
};

export default config;
