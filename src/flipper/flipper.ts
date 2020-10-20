export class Flipper {
  flip(words: string[]): string[] {
    return words.map((word) => {
      const firstHalf = word.slice(0, 2);
      const secondHalf = word.slice(2, 4);

      return secondHalf + firstHalf;
    });
  }
}
