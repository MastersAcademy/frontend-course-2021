const path = require('path');

module.exports = {
    entry: './src/script_typescript.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'script_typescript.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
