/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;

  preferences.forEach((lover, index, lovers) => {
    const firstLoverPassion = lover;
    const firstLoverNumber = index + 1;

    if (firstLoverPassion == firstLoverNumber) {
      return;
    }

    const secondLoverPassion = lovers[firstLoverPassion - 1];

    if (secondLoverPassion == firstLoverNumber) {
      return;
    }

    const thirdLoverPassion = lovers[secondLoverPassion - 1]

    if (thirdLoverPassion == firstLoverNumber) {
      counter++;
    }
  });

  return counter / 3;
};
