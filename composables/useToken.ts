import { useState } from '#imports';

export default function useToken() {
  const accessToken = useState(() => '');

  return {
    getAccessToken() {
      return accessToken.value;
    },
    setAccessToken(value: string) {
      accessToken.value = value;
    },
  }
}