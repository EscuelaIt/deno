import { Gender } from "./gender.ts";
import { Image } from "./image.ts";

export interface ImageRepository {
  find(gender?: Gender): Promise<Image>;
}
