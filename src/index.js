module.exports = function reverse (n) {
  let strN = Math.abs(n).toString();
  let newN = "";
  for (let i = strN.length-1; i >= 0; i--) {
    newN += strN[i];
  } 
  return newN;
}
