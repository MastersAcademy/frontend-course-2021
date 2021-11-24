const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: {
		app: './src/index.ts',
	},
	module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
		liveReload: true,
		hot: true,
  },
	resolve: {
		extensions: ['.ts', '.js']
	},
	output: {
		publicPath: 'dist',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
}
