// /.netlify/functions/excuse   
// https://superlative-kataifi-3c0c26.netlify.app/api/excuse
import fetch from 'node-fetch';

exports.handler = async function (event, context) {
    let who = 'programmer';
    let why = 'my code is compiling';
    let what = 'waiting';
    let url = `https://function.xkcd-excuse.com/v1/excuse?who=${who}&why=${why}&what=${what}`;
    
    let headers = new fetch.Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', "*");

    let response, body;
    const requestOptions = {
        method: 'GET',
        headers: headers,
        // redirect: 'follow'
    };
    try{
        response = await fetch(url, requestOptions);
        body = await response.json();
        console.log(body);

    }catch(err){
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
                error: err.message
            })
        }
    }

    return {
      "statusCode": 200,
      "headers": { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      "body": JSON.stringify(body)
    };
  };