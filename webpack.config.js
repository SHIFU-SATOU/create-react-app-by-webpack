const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    target: 'web',
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        hot: true,
        open: true,
        liveReload: true
    },
    resolve: {
        'extensions': ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                'test': /\.(js|jsx)$/,
                'exclude': /node_modules/,
                'use': {
                    'loader': 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            'template': "./public/index.html",
            'filename': "./index.html"
        })
    ]
}