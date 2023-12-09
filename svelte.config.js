import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		generate: 'ssr'
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
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
