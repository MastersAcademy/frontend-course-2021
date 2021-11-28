const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
      },
    entry: './src/script_typescript.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
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
