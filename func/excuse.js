// /.netlify/functions/excuse   
// https://superlative-kataifi-3c0c26.netlify.app/api/excuse
import fetch from 'node-fetch';

const API_ENDPOINT = 'https://theexcusegoose.com/generate/';

exports.handler = async function (event, context) {
    let response, body;
    try{
        response = await fetch(API_ENDPOINT);
        body = await response.text();
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
      "body": body,
    };
  };