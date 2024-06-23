import adapter from '@sveltejs/adapter-netlify';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			$components: path.resolve('src/components'),
		}
	}
};

export default config;
