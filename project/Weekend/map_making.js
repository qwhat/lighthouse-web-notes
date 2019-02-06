var words = ["ground", "control", "to", "major", "tom"];


function map(arr,pHolder) {
  var array = []
  for (word of arr) {
    array.push(pHolder(word))
  }
  console.log(array)
  return array
}

  map(words, function(word) {
  return word.length;
  });

  map(words, function(word) {
  return word.toUpperCase();
  });

  map(words, function(word) {
  return word.split('').reverse().join('');
  });
