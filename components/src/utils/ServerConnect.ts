const URL = 'https://mock-server-api-pink.vercel.app';
const CATALOGUE = 'catalog';

export function ServerConnect<T>(value: string): Promise<T[]> {
  return fetch(`${URL}/${CATALOGUE}/?q=${value}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => data as T[]);
  });
}
