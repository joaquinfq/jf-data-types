const path     = require('path');
const UglifyJs = require('uglifyjs-webpack-plugin');
module.exports = {
    entry   : {
        app : './src/index.mjs'
    },
    output  : {
        path          : path.resolve(__dirname, 'build'),
        filename      : 'jfDataTypes.js',
        pathinfo      : true,
        library       : ['jf', 'dataTypes'],
        libraryTarget : 'umd'
    },
    resolve : {
        extensions : ['.mjs', '.js']
    },
    module  : {
        loaders : [
            {
                test    : /\.m?js$/,
                exclude : /node_modules/,
                loader  : 'babel-loader',
                query   : {
                    plugins : [
                        'transform-class-properties',
                        'transform-runtime'
                    ],
                    presets : [
                        'env'
                    ]
                }
            }
        ]
    },
    plugins : [
        new UglifyJs()
    ]
};
