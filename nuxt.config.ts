export default defineNuxtConfig({
  css: ['/assets/css/main.css'],
  publicRuntimeConfig: {
    authRedirectUri: process.env.AUTH_REDIRECT_URI || 'http://localhost:3000/auth/callback',
  },
});
