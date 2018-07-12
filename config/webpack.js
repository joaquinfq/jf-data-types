const net     = require('node-env-tools');
const path    = require('path');
const isPro   = net.isPro();
/**
 * Configuración base de webpack que luego puede ser extendida y/o
 * personalizada por el resto de repositorios de modelos.
 *
 * @type {object}
 */
const _config = {
    entry        : './src/index.mjs',
    mode         : isPro ? 'production' : 'development',
    module       : {
        rules : [
            {
                loader  : 'babel-loader',
                test    : /\.m?js$/,
                exclude : /node_modules\/(?!jf-)/,
                type    : 'javascript/auto',
                include : [
                    path.join(__dirname, '..', 'src'),
                    path.dirname(require.resolve('jf-factory'))
                ]
            }
        ]
    },
    optimization : {
        minimize : isPro
    },
    output       : {
        filename      : isPro ? 'jfDataTypes.min.js' : 'jfDataTypes.js',
        library       : ['jf', 'dataTypes'],
        libraryTarget : 'umd',
        path          : path.join(__dirname, '..', 'build'),
        pathinfo      : true
    },
    resolve      : {
        extensions : ['.mjs', '.js'],
        symlinks   : false
    }
};
if (!isPro)
{
    _config.devtool = '#inline-source-map';
}
module.exports = _config;
