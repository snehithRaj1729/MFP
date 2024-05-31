const {merge} = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;
//mode-> production causes webpack to run slightly differently.It makes sure that all the js files that are build gets 
//somewhat optimised. Its gonna minify all of them and make some small optimisations
//filename: '[name].[contenthash].js'--> This makes sure that all the different files that are built follow this template to figureout how to name them.
//First we put down name of the file that is created and then hash of the contents of that file. This is done primarily
//for caching issues
const prodConfig = {
    mode: 'production',
    output:{
        filename: '[name].[contenthash].js'
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared:packageJson.dependencies,
        })
    ]
};
module.exports=merge(commonConfig,prodConfig);