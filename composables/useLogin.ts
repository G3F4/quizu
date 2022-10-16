import { useNuxtApp, useRoute, useState } from '#imports';
import { User } from '@auth0/auth0-spa-js';
import useToken from '~/composables/useToken';

export default function useLogin() {
  const { $auth: auth } = useNuxtApp();
  const user = useState<User | undefined>(() => undefined);
  const isLogged = useState(() => false);
  const { setAccessToken } = useToken();

  return {
    user,
    isLogged,
    async ensureLogged() {
      const authenticated = await auth.isAuthenticated()
      if (authenticated) {
        setAccessToken(await auth.getTokenSilently())
        user.value = await auth.getUser();
        isLogged.value = authenticated;
      }
    },
    async handleCallback() {
      const route = useRoute();
      await auth.handleRedirectCallback(encodeStateQueryParam(route.fullPath));
      const token = await auth.getTokenSilently();
      user.value = await auth.getUser();
      setAccessToken(token);
      isLogged.value = true;
      navigateTo('/');

      function encodeStateQueryParam(url: string) {
        // dummy workaround for decoded route query
        // vue-router provides decoded query params
        // but auth0 client need encoded
        // the only decoded part of query params is equal chars in state query param.
        return url.replace('==', '%3D%3D');
      }
    },
    login() {
      auth.loginWithRedirect();
    },
    logout() {
      user.value = undefined;
      isLogged.value = false;
      setAccessToken('');
      auth.logout();
    }
  }
}