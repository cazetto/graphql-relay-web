import { Variables } from 'react-relay';
// import { RequestNode } from 'relay-runtime';

let GRAPHQL_SERVER_URL: string = 'http://localhost:7000/graphql';

async function fetchQuery(request: any, variables: Variables) {
  try {
    let body = await fetch(GRAPHQL_SERVER_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: request.name,
        query: request.text,
        variables
      })
    });

    return await body.json();
  } catch (error) {
    console.log('error', error);

    throw error;
  }
}

export default fetchQuery;
