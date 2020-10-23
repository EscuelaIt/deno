export interface ImageRepository {
  find(): Promise<string>;
}
