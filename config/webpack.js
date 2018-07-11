const net     = require('node-env-tools');
const path    = require('path');
const isPro   = net.isPro();
/**
 * Configuración base de webpack que luego puede ser extendida y/o
 * personalizada por el resto de repositorios de modelos.
 */
const _config = {
    entry   : {
        app : './src/index.mjs'
    },
    module  : {
        rules : [
            {
                test    : /\.m?js$/,
                exclude : /node_modules\/(?!jf-)/,
                include : [
                    path.resolve(__dirname, '..', 'src'),
                    path.dirname(require.resolve('jf-factory'))
                ],
                use     : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    output  : {
        filename      : isPro ? 'jfDataTypes.min.js' : 'jfDataTypes.js',
        library       : ['jf', 'dataTypes'],
        libraryTarget : 'umd',
        path          : path.resolve(__dirname, '..', 'build'),
        pathinfo      : true
    },
    resolve : {
        extensions : ['.mjs', '.js'],
        symlinks   : false
    },
    optimization : {
        minimize : true
    }
};
if (!isPro)
{
    _config.devtool = '#inline-source-map';
}
module.exports = _config;
