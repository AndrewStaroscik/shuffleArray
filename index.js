// implementation of this code: http://stackoverflow.com/a/12646864/1112097

// takes an array and returns the same array shuffled. 

module.exports = funciton(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
   }
   return array;
};
