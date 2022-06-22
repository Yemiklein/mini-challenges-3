/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 **/
 function binaryReversal(str) {
  let temp = '';
  for (let i = 0; i < str.length; i++) {
      temp = str[i] + temp;
  }
  // code goes here
  return temp;

};

// keep this function call here
binaryReversal(readline());
module.exports = binaryReversal;
