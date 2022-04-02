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