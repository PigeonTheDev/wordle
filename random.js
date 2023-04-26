export default function RandomWord() {
  const wordList = ["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "SEHPA", "ROMAN", "CEVİZ"];

  const theWord = wordList[Math.floor(Math.random() * wordList.length)];

  return theWord;
}
