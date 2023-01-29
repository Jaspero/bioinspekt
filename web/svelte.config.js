import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const BLOGS = ["/blog/steer-away-from-the-iceberg","/blog/where-is-your-brain","/blog/lets-take-you-to-the-moon","/blog/is-aging-an-engineering-problem","/blog/You cant do everything you want"];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		preserve: ['module']
	}),

	kit: {
		adapter: adapter({
			pages: '../public/web'
		}),
		prerender: {
			 entries: ['/', '/404', ...BLOGS]
    }
	}
};

export default config;
