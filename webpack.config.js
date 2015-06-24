module.exports = {
    // just point to first file
    entry: './client/app/app.js',
    // all gets aggregated into here
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            // regex match on files
            { test: /\.js$/, loader: 'babel', excludes: [/\.node_modules/]}
        ]
    }

};