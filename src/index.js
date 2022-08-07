
module.exports = function towelSort (matrix) {
  let res = []

  if(matrix) {
    for (let i=0; i<matrix.length; i++) {i % 2 ? res = res.concat(matrix[i].reverse()) : res = res.concat(matrix[i])}   
  }
  return res
}