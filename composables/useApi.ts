import { useFetch, useToken, watch } from '#imports';

type UseApiRequest<Response> = Parameters<typeof useFetch<Response>>[0];

export default function useApi<Response>(req: UseApiRequest<Response>) {
  const accessToken = useToken().getAccessToken();
  const { data, pending, error } = useFetch<Response>(req, { headers: {
      authorization: `Bearer ${accessToken}`,
    },
    key: `${req}`
  });

  return new Promise<Response>((resolve, reject) => {
    if (error.value) {
      reject(error);
    } else if (pending.value) {
      watch(pending, () => {
        resolve(data.value as Response);
      });
    } else {
      resolve(data.value as Response);
    }
  });
}