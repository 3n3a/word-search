import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line


const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: resolve(__dirname, './src/lib/components')
		}
	}
};

export default config;
