
import commonjs from '@rollup/plugin-commonjs';
import resolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import postcss from "rollup-plugin-postcss";
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import packageJson from './package.json' with { type: 'json' };


export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      peerDepsExternal(),
      postcss({ 
        extensions: [".modules.css", '.css'], 
        inject: true, 
        extract: false,
        modules: true  
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      commonjs(),
      terser(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  },
  {
      input: "dist/esm/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
  }
];