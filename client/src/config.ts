const apiId = 'uh3fwjwft0'

export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-tx0-wmkn.auth0.com', // Auth0 domain
  clientId: 'TRC3iaAg4aRbyqDLT0PMn1u14tjn6xiq', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
