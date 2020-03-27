// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'zgb9isksyl';

export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`;

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-tx0-wmkn.auth0.com', // Auth0 domain
  clientId: 'TRC3iaAg4aRbyqDLT0PMn1u14tjn6xiq', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
};
