import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import copy from 'rollup-plugin-copy'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
		},
		{
			file: pkg.module,
			format: 'es',
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		copy({
			targets: [
				{ src: 'src/query-hostname.js', dest: 'dist' }
			]
		})
	]
}