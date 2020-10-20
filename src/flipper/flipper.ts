export class Flipper {
  flip(words: string[]): string[] {
    return words.map((word) => {
      const half = word.length / 2;
      let firstHalf = word.slice(0, half);
      let secondHalf = word.slice(half, word.length);
      const firstHalfFirstLetter = this.getFirstLetterOfWord(firstHalf);
      if (firstHalfFirstLetter.toUpperCase() === firstHalfFirstLetter) {
        const ignoringFirstLetterOfWord = 1;
        secondHalf =
          this.getFirstLetterOfWord(secondHalf).toUpperCase() +
          secondHalf.slice(ignoringFirstLetterOfWord, secondHalf.length);
        firstHalf = firstHalf.toLowerCase();
      }

      return secondHalf + firstHalf;
    });
  }

  private getFirstLetterOfWord(word: string) {
    return word[0];
  }
}
