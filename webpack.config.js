const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'detailed-paige.html',
            template: './src/detailed-paige.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
};
