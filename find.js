export default function findObj(key, index, word) {
  let doesInclude = false;
  let isRightPlace = false;

  if (word.includes(key)) {
    doesInclude = true;

    const myArray = word.split("");

    if (myArray[index] === key) {
      isRightPlace = true;
    }
  }

  const newObj = {
    letter: key,
    include: doesInclude,
    rightPlace: isRightPlace,
  };

  return newObj;
}
