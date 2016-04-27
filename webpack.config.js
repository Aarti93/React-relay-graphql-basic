module.exports = {
    entry: "./src/companyInfo/Components/main.jsx",
    output: {
        path: __dirname + "/lib",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader',
              exclude: /node_modules/,
              query: { presets: ['react', 'es2015', 'stage-0'],
                       plugins: ['./lib/babelRelayPlugin']
                     }
           }
        ]
    }
};
