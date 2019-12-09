var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    publicPath: "./",
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "webpack/index.html",
                inlineSource: ".(js|css)$"
            }),
            new HtmlWebpackInlineSourcePlugin()
        ]
    },
    "transpileDependencies": [
        "vuetify"
    ]
}