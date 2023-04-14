// const resolve = require("@rollup/plugin-node-resolve");
// const commonjs = require("@rollup/plugin-commonjs");
// const typescript = require("@rollup/plugin-typescript");
// const dts = require("rollup-plugin-dts").default;
// const packageJson = require("./package.json");
// const postcss = require("rollup-plugin-postcss");
// const terser = require("@rollup/plugin-terser");
// const babel = require('@rollup/plugin-babel')
// const peerDepsExternal  = require('rollup-plugin-peer-deps-external');
// const fs = require('fs');
// const path = require('path');

// // const components = fs.readdirSync('src/components').filter((file) => path.extname(file) !== '.ts');

// const config = [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       postcss(),
//       terser(),
//       babel({
//         exclude: 'node_modules/**',
//       }),
//       peerDepsExternal
//     ],
//     external: ['react', 'antd'],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.css$/],
//   },
// ];

// module.exports = config;


const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require('@rollup/plugin-babel');
const packageJson = require("./package.json");
const typescript = require("@rollup/plugin-typescript");
const peerDepsExternal  = require('rollup-plugin-peer-deps-external');
const dts = require("rollup-plugin-dts").default;
const json =require("@rollup/plugin-json");

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      json(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    external: ['react', 'antd'],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  }
]

module.exports = config