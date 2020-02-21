module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)){
    return [];
  }

  let result = [];
  matrix.forEach((x, i) => {
        let newArray = (i % 2) ? x.reverse() : x;
        result = result.concat(newArray);
    });

    return result;
}
