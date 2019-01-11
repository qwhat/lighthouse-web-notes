var input = [
  { a: 3, b: 4 },
  { a: 12, b: 5 },
  { a: 8, b: 15 }
];
var result = input.map(function(factors){
  var a = factors.a
  var b = factors.b
  var c2 = (Math.pow(a, 2) + Math.pow(b, 2))
  var c = Math.sqrt(c2)
  return c

})
console.log(result[0] === 5);//z^2 = 5
console.log(result[1] === 13);//z^2 = 13
console.log(result[2] === 17);//z^2 = 17
