const webpack = require('webpack'),
    path = require('path'),
    env = process.env.NODE_ENV,
    outputPath = `${__dirname}/lib`;

// 依赖的公共资源
const lib = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-saga',
    'pure-render-decorator'
];

const compress = env === 'production' ? [
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
        filename: 'lib.js',
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
