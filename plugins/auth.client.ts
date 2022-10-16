import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import createAuth0Client from '@auth0/auth0-spa-js';
import authConfig from '~/authConfig';

export default defineNuxtPlugin(async () => {
  const { authRedirectUri } = useRuntimeConfig();
  return {
    provide: {
      auth: await createAuth0Client({ ...authConfig, redirect_uri: authRedirectUri }),
    }
  }
})