import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import terser from '@rollup/plugin-terser';
import inject from '@rollup/plugin-inject';

export default defineConfig({
    plugins: [
        vue(),
        inject({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),

    ],

    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                entryFileNames: 'assets/js/app.[hash].js',
                chunkFileNames: 'assets/js/[name].[hash].js',
                assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
            },
            plugins: [

                terser({
                    compress: {
                        // drop_console: true,
                        //drop_debugger: true,
                        // pure_funcs: ['console.log'],
                    },
                    format: {
                        comments: false,
                    },
                    ecma: 2020,
                    module: true,
                    warnings: true,
                    toplevel: true,
                    mangle: true,
                })

            ]
        },
    }
});
