interface IFetch {
  body?: string;
  method: string;
}

export async function useFetch(url: string, options: IFetch) {
  const {
    body,
    method
  } = options;

  return await fetch(url, {
    body: body,
    headers: {
      "Content-Type": "application/json"
    },
    method: method
  })
};