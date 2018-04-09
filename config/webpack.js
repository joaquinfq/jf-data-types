const net      = require('node-env-tools');
const path     = require('path');
const UglifyJS = require('uglifyjs-webpack-plugin');
const isPro    = net.isPro();
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
                exclude : /node_modules/,
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
    node    : {
        setImmediate  : false,
        // Previene que webpack inyecte mocks para algunos módulos nativos que no tienen sentido en el navegador.
        dgram         : 'empty',
        fs            : 'empty',
        net           : 'empty',
        tls           : 'empty',
        child_process : 'empty'
    },
    output  : {
        filename      : isPro ? 'jfDataTypes.min.js' : 'jfDataTypes.js',
        library       : ['jf', 'dataTypes'],
        libraryTarget : 'umd',
        path          : path.resolve(__dirname, '..', 'build'),
        pathinfo      : true
    },
    resolve : {
        extensions : ['.mjs', '.js']
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
