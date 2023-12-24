const path = require('path');

module.exports = [
    // Add support for native node modules
    {
        test: /native_modules[/\\].+\.node$/,
        use: 'node-loader',
    },
    {
        test: /\.jsx?$/,
        use: {
            loader: 'babel-loader',
            options: {
                exclude: /node_modules/,
                presets: ['@babel/preset-react'],
            },
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },
    {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    },

    {
        test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
        parser: { amd: false },
        use: {
            loader: '@vercel/webpack-asset-relocator-loader',
            options: {
                outputAssetBase: 'native_modules',
            },
        },
    },
];
