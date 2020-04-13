const fetch = require('node-fetch');
exports.handler = async function (event, context) {
  console.log(event.headers.referer);
  if (
    event.headers.referer !== 'https://staging.konstytucja.online/dyskusja' ||
    event.headers.referer === undefined
  ) {
    return {
      statusCode: 403,
      body: JSON.stringify({ msg: 'Forbidden' })
    };
  }
  const ENDPOINT = 'https://disqus.com/api/3.0/forums/listPosts.json';
  const VARS = `?forum=konstytucja&api_key=${process.env.DISQUS_API_KEY}`;

  try {
    const response = await fetch(ENDPOINT + VARS, {
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