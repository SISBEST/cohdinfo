module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters)
  return {
    statusCode: 200,
    body: "YOU FOUND THE SECRET FUNCTION!!!!"
  }
}