import { Url } from "./url.ts";

export class Http {
  get<Result>(url: Url): Promise<Result> {
    return fetch(url).then((x) => x.json());
  }
}
