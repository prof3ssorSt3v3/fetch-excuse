// /.netlify/functions/excuse

exports.handler = async function (event, context) {
    //event - similar to express Request object
    let url = 'https://theexcusegoose.com/generate/';
    let response = await fetch(url);
    

    return {
      "statusCode": response.status,
      "headers": { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      "body": response.body,
    };
  };