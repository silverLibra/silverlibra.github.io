const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.jsx',
    },
    output: {
        filename: './static/js/[name].bundle.js',
        path: path.resolve(__dirname, './'),
    },
    plugins: [
        new CopyPlugin([
            // 這次的例子中copy to的目標path會基於output.path的路徑之下
            {
                from: './src/index.html',
                to: './'
            },
            {
                from: './src/img',
                to: './static/img'
            },
        ])],
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                             sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                             sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                             sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    //給devserver的設定
    devServer: {
        //指定開啟port為8080
        //contentBase 靜態檔案位置
        contentBase: path.join(__dirname, './'),
        historyApiFallback: false,
        port: 9090,
        after: function(app, server, compiler) {
            console.log("test");
        }
    }
};
