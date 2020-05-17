export const getParagraphs = (count: number): string => {
  const words: string[] = [];

  for (let index = 0; index < count; index++) {
    words.push("blah");
  }

  return words.join(" ");
};

// console.log(getParagraphs(4));
