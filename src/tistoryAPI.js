const fetch = require('node-fetch');
const open = require('open');
global.Headers = fetch.Headers;
global.Request = fetch.Request;
var CLIENT_ID = 'eabc41ca2ffb26b9272407aacaea09a6';
var SECRET_KEY = 'eabc41ca2ffb26b9272407aacaea09a6fd332e137101146e4feee4810d95601c30618daf';
var REDIRECT_URL = "http://felipuss.tistory.com/";
var ACCESS_TOKEN = "47233578ba0b0fb1211ffc3eb2551eec_5beea42f95253d34afb9e7fb8e250aba";
var MIDCODE = "41d964f27a65325e8d808467b59f0d990a058ba53fecce1c1da0659b02520155b019820d";
var OUTPUT = "JSON";
https: //www.tistory.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&state={state_param}
if (MIDCODE === ""){
    auth_url = `https://www.tistory.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;
    console.log(auth_url);
}

if (ACCESS_TOKEN === "") {
    var token_url = 
        `https://www.tistory.com/oauth/access_token?` + 
        `client_id=${CLIENT_ID}` + 
        `&client_secret=${SECRET_KEY}` + 
        `&redirect_uri=${REDIRECT_URL}` +
        `&code=${MIDCODE}` + 
        `&grant_type=authorization_code`;
    console.log(token_url)
}

var myInit = {
    method: 'GET',
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
        "Access-Control-Allow-Origin": '*'
    },
    RequestMode: 'cors'
};

let API_URL = `https://www.tistory.com/apis/post/list?` + 
`access_token=${ACCESS_TOKEN}` +
`&output=${OUTPUT}` +
`&blogName=felipuss` +
`&page=1`;

var myRequest = new Request(token_url, myInit);

fetch(myRequest)
    .then(function (response) {    
        console.log(response);
    })