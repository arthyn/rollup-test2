import resolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import ts from '@wessberg/rollup-plugin-ts';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';


export default {
	input: 'src/main.ts',
	output: {
		file: 'dist/main.js',
		format: 'esm'
	},
	plugins: [
		commonJs(),
		resolve({
			mainFields: ['browser', 'module']
		}),
		json(),
		vue(),
		ts({
			transpiler: "babel",
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify( 'production' )
		}),
		serve('dist')
	]
}