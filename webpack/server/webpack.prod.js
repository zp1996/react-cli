const fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
    rootPath,
    outputPath,
    modules,
    resolve
} = require('../webpack.default.js');

module.exports = {
    entry: `${rootPath}/app`,
    target: 'node',
    node: {
        __dirname: true,
        __filename: true
    },
    output: {
        path: rootPath,
        filename: 'ssr.js'
    },
    module: modules,
    resolve,
    externals: fs.readdirSync(path.resolve(rootPath, './node_modules')).concat([
        'react-dom/server',
    ]).reduce((ext, mod) => {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {}),
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
        new ExtractTextPlugin(`${outputPath}/bundle.[chunkhash:8].css`),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require('autoprefixer')]
            }
        })
    ]
};
