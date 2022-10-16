import { defineEventHandler } from 'h3';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import authConfig from '~/authConfig';

export default defineEventHandler(async (event) => {
  console.log(['event.req.url'], event.req.url);
  if (isApiEndpoint(event.req.url)) {
    const authorization = event.req.headers.authorization || '';
    const token = authorization.split(' ')[1];
    if (token) {
      const client = jwksClient({
        jwksUri: 'https://g3f4.eu.auth0.com/.well-known/jwks.json'
      });
      function getKey(header, callback){
        client.getSigningKey(header.kid, function(err, key) {
          // @ts-ignore
          const signingKey = key.publicKey || key.rsaPublicKey;
          callback(null, signingKey);
        });
      }
      const userId = await new Promise((resolve) => {
        jwt.verify(token, getKey, { audience: authConfig.audience }, function(err, decoded) {
          if (err) {
            event.res.statusCode = 401;
          } else {
            resolve(decoded.sub);
          }
        });
      })
      if (userId) {
        event.context.auth = { userId }
      } else {
        event.res.statusCode = 401;
      }
    } else {
      event.res.statusCode = 401;
    }
  }
})

function isApiEndpoint(url: string) {
  return url.startsWith('/api/');
}