const {merge, mergeWithCustomize} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = merge(commonConfig,devConfig);
// By listing out devconfig second that means that devconfig is going to override over on options that we might 
// have assigned to commonConfig