export class Http {
  get<T>(url: string): Promise<T> {
    return fetch(url).then((x) => x.json());
  }

  post<T>(url: string, body: T) {
    return fetch(url, { body: JSON.stringify(body) }).then((x) => x.json());
  }
}
