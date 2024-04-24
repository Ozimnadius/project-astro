import {defineConfig} from 'astro/config';

export default defineConfig({
    compressHTML: false,
    build: {
        inlineStylesheets: `never`,
        assets: 'assets',
    },
});

