export function count(elements: string[]) {
  const countedElements: Record<string, number> = {};

  for (let i = 0; i < elements.length; i++) {
    if (countedElements[elements[i]] === undefined) {
      countedElements[elements[i]] = 1;
    } else {
      countedElements[elements[i]]++;
    }
  }

  return countedElements;
}
