const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        host: 'localhost',
        port: 4200,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
}
