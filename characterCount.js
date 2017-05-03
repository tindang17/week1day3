// a funcion that can RETURN individual character of a string
// how many time a particular character appear in the string
// function needs to return an object that can represent the stats for the sentence it is given
// group same letters together
function countLetters(string) {
  var stringRevised = string.toLowerCase();
  var output = {};
  for (var i = 0; i < stringRevised.length; i = i + 1 ) {
    //split string into array
    var individualChar = stringRevised[i]; //
    if (individualChar === ' ') {
      continue;
    }
    if (output[individualChar]) {
      output[individualChar] += 1;
    } else {
      output[individualChar] = 1;
    }
  }
  return output;
}
console.log(countLetters("Lighthouse in the House"));

// var strings = "Lighthouse in the house";
// strings.length;
// console.log(strings.length);