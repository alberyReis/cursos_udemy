const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPluglin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'), // substitua 'public' pelo seu diretório base de conteúdo
    },
    compress: true,
    port: 9000
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      }),
      new OptimizeCssAssetsPluglin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],
  module: {
    rules: [{
      test:/\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
        'css-loader', // Interpreta @import, url()...
        'sass-loader'
      ]
    }, {
      test: /\.(png\svg\jpg\gif)$/, 
      use: ['file-loader']
    }]
  }
}