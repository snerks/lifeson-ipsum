export const getSentence = (wordCount?: number): string => {
  if (wordCount !== undefined && wordCount < 1) {
    throw new Error("wordCount must be greater than 0");
  }
  const count = wordCount || 20;
  const words: string[] = [];

  const commaIndices = [1, 4, 5, 7, 9, 11, 14, 15, 17];

  for (let index = 0; index < count; index++) {
    let word = index === 0 ? "Blah" : "blah";

    if (commaIndices.indexOf(index) > -1) {
      word += ",";
    }
    words.push(word);
  }

  return `${words.join(" ")}.`;
};

export const getParagraph = (sentenceCount?: number): string => {
  if (sentenceCount !== undefined && sentenceCount < 1) {
    throw new Error("sentenceCount must be greater than 0");
  }

  const count = sentenceCount || 4;
  const sentences: string[] = [];

  for (let index = 0; index < count; index++) {
    sentences.push(getSentence());
  }

  return sentences.join("\n");
};

console.log(getParagraph());
