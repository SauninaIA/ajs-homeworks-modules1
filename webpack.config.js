const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.css$/, // Пример: загрузка CSS-файлов
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader', // или другой загрузчик для CSS
            ],
          },

          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
       
        ],
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]

}