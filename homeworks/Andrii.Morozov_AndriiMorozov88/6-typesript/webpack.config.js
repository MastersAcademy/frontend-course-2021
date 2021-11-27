const path = require('path');

module.exports = {
    entry: './src/script_typescript.ts',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
      },
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
