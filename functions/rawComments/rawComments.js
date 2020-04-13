const fetch = require('node-fetch');
exports.handler = async function (event, context) {
  const ENDPOINT = `/disqus/listPosts.json?forum=konstytucja&api_key=${process.env.DISQUS_API_KEY}`;
  try {
    const response = await fetch(ENDPOINT, {
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};