import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				silenceDeprecations: ['color-functions'],
				additionalData: `@use 'sass:map'; @use '/src/styles/_smui-theme.scss' as *; `
			}
		}
	}
});
