const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const analyzeConfig = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerHost: "0.0.0.0"
        })
    ]
};

const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, analyzeConfig);