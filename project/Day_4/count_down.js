var countdownGenerator = function (x) {
  var count = x
  return function() {
    if (count > 0) {
      console.log("T-minus " + count )
      count = count - 1
    }
    else if ( count === 0) {
      console.log("blast off!")
      count = count - 1
    }
    else if (count < 0){
      console.log("Rockets already gone, bub!")
      count = count - 1
    }
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
