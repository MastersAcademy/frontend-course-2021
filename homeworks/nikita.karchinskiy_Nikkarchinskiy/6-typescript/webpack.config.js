module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    entry: './src/index.ts',
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
        filename: './dist/index.js',
    },
};
