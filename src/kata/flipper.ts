export class Flipper {
  flip(string: string) {
    return string.split("\n").map((word) => {
      const isOdd = word.length % 2 !== 0;
      const half = Math.floor(word.length / 2) + (isOdd ? 1 : 0);

      const firstHalf = word.slice(0, half);
      const secondHalf = word.slice(half, word.length);

      const firstLetterFirstHalf = firstHalf.slice(0, 1);
      const firstLetterSecondHalf = secondHalf.slice(0, 1);

      const shouldCapitalize = this.isUpperCased(firstLetterFirstHalf);
      const capitalizedSecondHalf = (shouldCapitalize
        ? firstLetterSecondHalf.toUpperCase()
        : firstLetterSecondHalf) + secondHalf.slice(1, secondHalf.length);
      const lowerCasedFirstHalf = firstHalf.toLowerCase();
      return capitalizedSecondHalf + lowerCasedFirstHalf;
    }).join("\n");
  }

  private isUpperCased(letter: string) {
    return letter.toUpperCase() === letter;
  }
}
