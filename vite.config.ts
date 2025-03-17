import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
// import UnoCSS from '@unocss/svelte-scoped/vite';
// import UnoCSS from '@unocss/svelte-scoped/preprocess';

export default defineConfig({
	plugins: [UnoCSS({}), sveltekit()]
});
