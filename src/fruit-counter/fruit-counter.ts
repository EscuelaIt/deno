export function count(elements: string[]) {
  const countedElements: Record<string, number> = {};

  for (const item of elements) {
    if (countedElements[item] === undefined) {
      countedElements[item] = 1;
    } else {
      countedElements[item]++;
    }
  }

  return countedElements;
}
