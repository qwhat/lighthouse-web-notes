var words = ["ground", "control", "to", "major", "tom"];


function map(arr,pHolder) {
  var array = []
  for ( hello of arr) {
    array.push(pHolder(hello))
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
