// /.netlify/functions/excuse   
// https://superlative-kataifi-3c0c26.netlify.app/api/excuse
import fetch from 'node-fetch';

exports.handler = async function (event, context) {
    let url = 'https://theexcusegoose.com/generate/';
    let response, body;
    try{
        response = await fetch(url);
        body = await response.json();
    }catch(err){
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
                error: err.message
            })
        }
    }

    return {
      "statusCode": response.status,
      "headers": { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      "body": JSON.stringify(body)
    };
  };