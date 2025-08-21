import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/popup/index.js',
    output: {
      file: 'public/build/popup.js',
      format: 'iife',
      name: 'app'
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
          dev: false
        }
      }),
      css({ output: 'popup.css' }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),
      terser()
    ]
  },
  {
    input: 'src/background.js',
    output: {
      file: 'public/build/background.js',
      format: 'iife'
    },
    plugins: [
      resolve({
        browser: true
      }),
      commonjs(),
      terser()
    ]
  }
];