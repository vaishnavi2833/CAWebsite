export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const response = await fetch(
      'https://anilvishwakarma.co.in/kb/circulars/fetch_circulars.php',
      {
        method: 'POST',
        headers: { 'Content-Type': event.headers['content-type'] || 'application/x-www-form-urlencoded' },
        body: event.body,
      }
    );

    const text = await response.text();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
