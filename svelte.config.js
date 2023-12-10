import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		generate: false
	},
	preprocess: preprocess({
		scss: {
			prependData: `
				@import './src/styles/variables';
				@import './src/styles/mixins';
			`
		}
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		alias: {
			'@src': './src',
			'@styles': './src/styles',
			'@utils': './src/utils',
			'@stores': './src/stores',
			'@components': './src/components',
			'@modules': './node_modules'
		}
	}
};

export default config;
