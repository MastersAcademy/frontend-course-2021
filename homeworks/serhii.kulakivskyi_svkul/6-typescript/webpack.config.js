const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, ''),
        port: 3000,
        open: true,
        liveReload: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            linkType: 'text/css',
        }),
        new HtmlWebpackPlugin({
            favicon: 'favicon.ico',
            inject: 'body',
            template: path.join(__dirname, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
