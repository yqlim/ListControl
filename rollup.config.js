const babel = require('rollup-plugin-babel');

module.exports = {
  input: './src/index.js',
  output: {
    name: 'ListControl',
    file: './dist/listcontrol.js',
    format: 'umd',
    banner: '/*!\n * ListControl\n * (c) 2019 Yong Quan Lim\n * Released under MIT License.\n */'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
