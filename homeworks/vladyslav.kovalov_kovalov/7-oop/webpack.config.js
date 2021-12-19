const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		app: './src/app.ts',
	},
	module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
	devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    liveReload: true,
    hot : true
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
