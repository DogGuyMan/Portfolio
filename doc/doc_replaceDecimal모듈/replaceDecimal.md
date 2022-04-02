# replaceDecimal

### 개요
* string을 입력받으면 
공백기준으로 Split하여
정수배열을 리턴하는 함수다.

### 목적
* CSS style 값을 string으로 가져와
* JS에서도 사용할 수 있도록 Array< number>으로 가져와서 사용한다.

### 예시
```shell
//input
> replaceToDecimal("148px 80px 0");

//output
> [148, 80, 0]
```

### 스크립트
```ts
/*
replaceToDecimal
    다음은 string을 입력받으면 
    공백기준으로 Split하여
    정수배열을 리턴하는 함수다.
*/
export default function replaceToDecimal(_str : string) : Array<number> {
    const regex = /[^0-9]/g;
    let splitedStr = _str.split(' ');
    let resStrings : Array<number> = [];
    
    splitedStr.forEach(_E =>{
        resStrings.push(~~(_E.replace(regex, "")));
    })
    
    return resStrings;
}
```