const net      = require('node-env-tools');
const path     = require('path');
const UglifyJS = require('uglifyjs-webpack-plugin');
const isPro    = net.isPro();

const _config = {
    entry   : {
        app : './src/index.mjs'
    },
    output  : {
        path          : path.resolve(__dirname, '..', 'build'),
        filename      : isPro ? 'jfDataTypes.min.js' : 'jfDataTypes.js',
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
                loader  : 'babel-loader'
            }
        ]
    },
    plugins : []
};
if (isPro)
{
    _config.plugins.push(
        new UglifyJS(
            {
                uglifyOptions : {
                    compress : {
                        warnings : false
                    }
                },
                sourceMap     : false,
                parallel      : true
            }
        )
    );
}
else
{
    _config.devtool = '#inline-source-map';
}
module.exports = _config;
