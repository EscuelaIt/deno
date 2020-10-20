export class Flipper {
  flip(words: string[]): string[] {
    return words.map((word) => {
      const end = word.length;
      const half = end / 2;
      const firstHalf = word.slice(0, half);
      const secondHalf = word.slice(half, end);

      return secondHalf + firstHalf;
    });
  }
}
