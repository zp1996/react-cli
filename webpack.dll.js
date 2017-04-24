const webpack = require('webpack'),
    path = require('path'),
    env = process.env.NODE_ENV,
    prod = env === 'production',
    outputPath = `${__dirname}/lib`;

// 依赖的公共资源
const lib = [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-redux',
    'react-router-redux',
    'redux-saga',
    'pure-render-decorator',
    'react-addons-css-transition-group'
];

const compress = prod ? [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        comments: false,
        beautify: false
    }),
] : [];

module.exports = {
    devtool: 'source-map',
    entry: { lib },
    output: {
        path: outputPath,
        filename: prod ? 'lib.[chunkhash:8].js' : 'lib.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(outputPath, 'manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env || 'development')
        }),
        ...compress
    ]
};
