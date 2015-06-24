module.exports = {
    // just point to first file
    entry: './client/app/app.js',
    // all gets aggregated into here
    output: {
        filename: 'bundle.js'
    },

    devtool: 'sourcemap',

    module: {
        loaders: [
            // regex match on files
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.html$/, loader: 'raw', exclude: [/node_modules/] },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }

};