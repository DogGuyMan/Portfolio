const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    //엔트리와 output을 명시한다.
    //https://stackoverflow.com/questions/42813050/webpack-multiple-entry-points-sass-and-js
    entry: ['./src/index.ts', './style/style.scss'],
    module: {
        //test는 로더를 적용할 파일 형식으로 일반적으로 정규 표현식 사용한다. 
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')] //타겟 대상은 어디에 있는가..
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                include: [path.resolve(__dirname, 'style')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' })
    ]
}