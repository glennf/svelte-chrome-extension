import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/popup/index.ts',
    output: {
      file: 'public/build/popup.js',
      format: 'iife',
      name: 'app',
      sourcemap: !production
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
          dev: !production
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
      production && terser()
    ]
  },
  {
    input: 'src/background.ts',
    output: {
      file: 'public/build/background.js',
      format: 'iife',
      sourcemap: !production
    },
    plugins: [
      resolve({
        browser: true
      }),
      commonjs(),
      typescript({
        sourceMap: !production,
        inlineSources: !production
      }),
      production && terser()
    ]
  }
];