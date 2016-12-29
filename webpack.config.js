var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var globalCSS = new ExtractTextPlugin('assets/styles/global.css');

var testing = process.env.NODE_ENV === 'testing' || false;

module.exports = {
    entry: {
        app: [
            './src/index.jsx',
            './src/index.html',
            './src/styles/global.scss',
        ],
    },
    plugins: [
        globalCSS,
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.(scss)$/,
                exclude: /global.scss/,
                loaders: testing ? ['null'] : [
                    'style',
                    'css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:10]',
                    'resolve-url',
                    'sass',
                ],
            },
            {
                test: /global.scss/,
                loader: testing ? 'null' : globalCSS.extract(['css', 'sass']),
            },
            {
                test: /\.(gif|png|svg)$/,
                loader: 'url-loader?mimetype=image/png&limit=10000&name=/assets/images/[name]-[hash].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },
    sassLoader: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
    },
    resolve: {
        root: path.resolve('./src/'),
        extensions: ['', '.js', '.jsx', '.scss'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: 'bundle.js',
    },
};
