export class Flipper {
  flip(words: string[]): string[] {
    return words.map((word) => {
      const end = word.length;
      const half = end / 2;
      let firstHalf = word.slice(0, half);
      let secondHalf = word.slice(half, end);

      if (firstHalf[0].toUpperCase() === firstHalf[0]) {
        secondHalf =
          secondHalf[0].toUpperCase() + secondHalf.slice(1, secondHalf.length);
        firstHalf = firstHalf.toLowerCase();
      }

      return secondHalf + firstHalf;
    });
  }
}
