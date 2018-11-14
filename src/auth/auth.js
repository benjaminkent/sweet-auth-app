import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'benjaminkentjehl.auth0.com',
    clientID: 'gZI1HKHjyZT7a26qd1eEj9S4xqULQj46',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  login() {
    this.auth0.authorize()
  }
}
