// import commonjs from '@rollup/plugin-commonjs';
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraRollupPlugins: [
    commonjs(),
    // typescript({
    //   rollupCommonJSResolveHack: true,
    //   clean: true
    // }),

    // babel({
    //   exclude: 'node_modules/**',
    //   babelrc: false,
    //   presets: [
    //     '@babel/preset-env',
    //     '@babel/preset-typescript',
    //   ],
    // }),
  ],
};
