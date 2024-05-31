module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                },
            },
        ],
    },
};

// Inside the rules we define a loader
// Goal of a loader is to tell webpack to process some different files as we start to import them into our Project
// First loader that we are going to wireup is babel
// Babel is going to be incharge of processing our code from ES 2015 to so on and turn it into regular ES5 code to execute in browser
// /\.m?js$/ ==> when ever we import any file that ends with an extension of .mjs or .js we want it to be processed
// by babel
// excludes==> do not run babel on files mentioned in excludes
