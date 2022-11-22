const path = require("path");
// 用来打包时生成index.html
const HtmlWebpackPlugin = require("html-webpack-plugin")
// vue
const {VueLoaderPlugin} = require("vue-loader")
// webpack default
const {DefinePlugin} = require('webpack')
// 打包将css提取出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        mode: "development",
        // 入口
        entry: './src/main.js',
        // 开发环境下源文件映射，便于查看出错位置
        devtool: "inline-source-map",
        // 插件
        plugins: [
            // vue 可以在此配置原始模板
            new HtmlWebpackPlugin({
                templateContent: `<html lang="en"><head><meta charset="UTF-8"> <title>Title</title></head><body><div id="app"></div></body></html>`,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                }
            }),
            new VueLoaderPlugin(),
            new DefinePlugin({
                BASE_URL: "'./'",
                __VUE_OPTIONS_API__: true,
                // 生产环境是否要开启devtools
                __VUE_PROD_DEVTOOLS__: false,
            }),
            new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})
        ],
        // 输出配置
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        module: {
            rules: [
                // 加载css样式资源
                {
                    // test: /\.css$/i,
                    test: /\.s[ac]ss$|\.css$/i,
                    // style-loader 需要在css-loader之前
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
                // 加载sass
                /*   {
                       test: /\.s[ac]ss$/i,
                       use: ["style-loader", "css-loader","sass-loader"]
                   },*/
                // 加载图片资源
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    // 输出到指定目录
                    generator: {
                        filename: 'imgs/[hash][ext][query]'
                    }
                },
                // vue
                {
                    test: /\.vue$/i,
                    loader: "vue-loader"
                },
                // 普通js文件
                {
                    test: /\.js$/i,
                    loader: "babel-loader"
                }
            ]
        }
    }
}

