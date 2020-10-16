export function count(elements: string[]) {
  return elements.reduce(
    (accumulator: Record<string, number>, currentValue) => {
      if (accumulator[currentValue] === undefined) {
        accumulator[currentValue] = 1;
      } else {
        accumulator[currentValue]++;
      }

      return accumulator;
    },
    {}
  );
}
