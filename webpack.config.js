const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }, {
                test: /\.jpg$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }, {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'url-loader'
            }
        ]
    }
};
