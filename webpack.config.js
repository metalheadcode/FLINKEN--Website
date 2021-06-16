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
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.woff2$/,
                exclude: /node_modules/,
                use: { loader: "url-loader?limit=1024&name=fonts/[name].[ext]" },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
};
