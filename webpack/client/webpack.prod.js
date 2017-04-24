const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
    entry = {},
    port,
    rootPath,
    outputPath,
    modules,
    resolve,
    plugins
} = require('../webpack.default.js');

module.exports = {
    entry: Object.assign(entry, {
        app: [ `${rootPath}src/index.jsx` ]
    }),
    output: {
        filename: '[name].[chunkhash:8].js',
        path: outputPath,
        publicPath: '/'
    },
    module: modules,
    resolve,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            beautify: false
        }),
        new ExtractTextPlugin('bundle.[chunkhash:8].css'),
        new HtmlWebpackPlugin({
            template: `${rootPath}/src/index.html`,
        }),
        ...plugins
    ]
};
