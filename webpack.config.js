const webpack = require("webpack");
const path = require("path");

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/main.tsx'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
    }
};

module.exports = config;
