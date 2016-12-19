var createVendorChunk = require('webpack-create-vendor-chunk');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/main.tsx"
    },
    output: {
        path: './build/client',
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        createVendorChunk(),
        new ExtractTextPlugin('[name].[chunkhash].css'),

        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['vendor', 'app'],
        })
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: ['', '.jsx', '.js', '.tsx', '.ts'],

        alias: {
            '__root': process.cwd(),
        },
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css', 'less']),
            },
            {
                test: /(?:\.woff$|\.woff2$|\.ttf$|\.svg$|\.eot$)/,
                loader: 'file-loader',
                query: {
                    name: '/font/[hash].[ext]'
                }
            },
            {
                test: /(?:\.mp3$|\.png$|\.gif$)/,
                loader: 'file-loader',
                query: {
                    name: '/assets/[hash].[ext]'
                }
            },
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
