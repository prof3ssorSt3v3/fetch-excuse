// /.netlify/functions/excuse
const fetch = require('node-fetch')

const API_ENDPOINT = 'https://theexcusegoose.com/generate/';

exports.handler = async function (event, context) {
    //event - similar to express Request object
    let response;
    try{
        response = await fetch(API_ENDPOINT);
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
      "body": response.body,
    };
  };