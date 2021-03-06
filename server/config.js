// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'inspx2.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://insp:147258a@ds253388.mlab.com:53388/inspdemo',
  NAMESPACE: 'http://myapp.com/roles'
};