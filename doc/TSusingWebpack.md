[웹팩 이해하기](https://tecoble.techcourse.co.kr/post/2021-07-10-webpack-exercise/)

#### [전체 README.md로 돌아가기](../../../포트폴리오/README.md)

#### TS를 번들링하기 위해 웹펙 설치 명령어
```shell
npm install webpack webpack-cli ts-loader -D
```

* cli는 웹팩과 관련된 명령어를 사용할 수 있게 해주는 패키지 이다
* 따라서 webpack과 cli 두 패키지를 모두 설치해야한다.

#### entry & output
src 파일에는 TS파일들이 들어가 있다
  * Entry가 될Ts 경로를 복사하자

public은 최종 번들될 코드 결과물이 들어가진다.

webpack.config.js를 작성하자면 다음과 같다.

```js
//path 모듈을 통해 절대경로말고 resolve를 통해 다음과 같이 사용 가능
const path = require('path');

module.exports = {
    //entry는 번들하고 싶은 대상만큼 배열로 작성할 수 있다.
    entry: ['./src/index.ts', './style/style.scss'],
    //output은 번들코드 목적지가 된다.
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
```

#### loader
```js
module.exports = {
    //entry는 번들하고 싶은 대상만큼 배열로 작성할 수 있다.
    //entry: ['./src/index.ts', './style/style.scss'],
    //output은 번들코드 목적지가 된다.
    module: { 
        /*
        * test로 rules는 뭐냐하면 타겟 파일 형식을 정하고,
        * use로 어떤 loader 패키지를 사용하여 번들할것인지..
        * include를 통해 타겟 파일이 있는 경로를 작성해준다.
        * 그리고 번들 대상이 하나가 아니라면 object 형식으로 열거 해주면 된다. 
        */
        rules: [{
            //test는 로더를 적용할 파일 형식으로 일반적으로 정규 표현식 사용한다.
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
    //output: {
    //    publicPath: 'public',
    //    filename: 'bundle.js',
    //    path: path.resolve(__dirname, 'public')
    //}
}
```

#### 번들.js로 디버깅하고 싶지는 않은데요..;
소스맵을 사용하지 않으면..
디버깅하기 힘들다.. 번들된 코드가 에러를 배출하기떄문에..
그래서 번들된 js를 역으로 ts코드 불러오고 싶다면 소스맵을 사용해야한다.

두가지 파일을 수정해야한다.
1. tsconfig.json
    ```json
    {
        "compilerOptions": {
            :
            :
            "sourceMap": true,
            :
            : 
        }
    }
    ```
2. webpack.config.js
    ```js
    const path = require('path');

    module.exports = {
        //devtool은 여러가지 엄청 많은데.. 아무튼 최종 목적은
        //번들된 파일 디버깅을 다시 원상태로 하고싶을떄 사용한다고 생각하면 된다.
        devtool: 'eval-source-map',
        /*
        entry: ['./src/index.ts', './style/style.scss'],
        output: {
            publicPath: 'public',
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        }
        */
    }
    ```

#### 모듈 export -> import
```js
    const path = require('path');

    module.exports = {
        /*
        entry: ['./src/index.ts', './style/style.scss'],
        */
        resolve: {
            extensions: ['.ts', '.js']
        },
        /*
        output: {
            publicPath: 'public',
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        }
        */
    }
```

#### ... 근데 entry는 여러개 쓸수있기는한데 output은 단 하나아닌가?
scss의 output은 어떻게 설정하는것인가?
output에 작성하면 되는건가?.. 

다음과 같은 방식을 사용하더라..
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    /*
    devtool: 'eval-source-map',
    entry: ['./src/index.ts', './style/style.scss'],
    module: {
        //test는 로더를 적용할 파일 형식으로 일반적으로 정규 표현식 사용한다. 
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')] //타겟 대상은 어디에 있는가..
            },
            */
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                include: [path.resolve(__dirname, 'style')]
            }
            /*
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
    */
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' })
    ]
}
```

#### TS에서 모듈 사용

```js
export const _var_ = ... 
```

```js
import {_var_} from './___.ts'
```