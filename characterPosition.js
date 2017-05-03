function charPosition(string) {
  var charLowerCase = string.toLowerCase();
  var output = {};
  // var charIndex = []
  for (var i = 0; i < charLowerCase.length; i = i + 1 ) {
    //split string into array
    var individualChar = charLowerCase[i]; //
    if (individualChar === ' ') {
      continue;
    }
    if (output[individualChar]) {
      output[individualChar].push(i);
    } else {
      output[individualChar] = [i] ;
    }
  }
  return output;
}
console.log(charPosition("Lighthouse in the House"));
//If the value is unique, create an array and put the index value in it.
//and put the array into the object
// Output = {
//   l = [1]
//   i
//   h
//   ...
