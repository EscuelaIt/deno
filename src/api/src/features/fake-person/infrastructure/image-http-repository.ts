import { ImageRepository } from "../domain/image-repository.ts";
import { Http } from "../../../core/http.ts";
import { ImageDto } from "./image-dto.ts";
import { Injectable } from "../../../../deps.ts";
import { Image } from "../domain/image.ts";
import { Gender } from "../domain/gender.ts";

@Injectable()
export class ImageHttpRepository implements ImageRepository {
  constructor(private readonly http: Http) {}

  async find(gender?: Gender): Promise<Image> {
    let url = `https://fakeface.rest/face/json`;

    if (gender !== undefined) {
      url += `?gender=${gender}`;
    }
    const imageDto = await this.http.get<ImageDto>(url);
    return { photo: imageDto.image_url };
  }
}
