var webpack = require('webpack');
var config = require('./config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'client.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
                exclude: /node_modules/
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: `url-loader?name=fonts/[name].[ext]&limit=100000&mimetype=application/font-woff`
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: `url-loader?name=fonts/[name].[ext]&limit=100000&mimetype=application/font-woff`
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: `url-loader?name=fonts/[name].[ext]&limit=100000&mimetype=application/octet-stream`
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: './src'
    },
    devtool: 'eval-source-map'
}






