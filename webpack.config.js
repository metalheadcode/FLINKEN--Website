const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle_index.js",
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: "babel-loader" },
            {
                test: /\.css$/,
                loader: "css-loader",
                options: {
                    url: false,
                },
            },
            { test: /\.(png|jpe?g|gif)$/i, use: "file-loader" },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
};
