import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const BLOGS = ["/certifikacije/dokazana-kvaliteta-hrvatska","/certifikacije/zoi-i-zozp","/certifikacije/bez-gmo-standard","/certifikacije/dunav-soja-standard","/certifikacije/bio-suisse-standard","/zakonske-regulative/poticaji","/zakonske-regulative/eko-znak-hr","/zakonske-regulative/eko-znak-eu","/zakonske-regulative/uredbe-ekoloske-proizvodnje","/blog/as"];

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
