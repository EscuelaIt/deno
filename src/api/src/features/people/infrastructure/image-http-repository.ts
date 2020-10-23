import { ImageRepository } from "../domain/image-repository.ts";
import { Http } from "../../../core/http.ts";
import { Injectable } from "../../../../deps.ts";
import { ImageDto } from "./image-dto.ts";

@Injectable()
export class ImageHttpRepository implements ImageRepository {
  constructor(private readonly http: Http) {}

  async find(): Promise<string> {
    const https = await this.http.get<ImageDto>(
      "https://fakeface.rest/face/json"
    );
    return https.image_url;
  }
}
