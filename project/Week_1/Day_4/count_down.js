var countdownGenerator = function (x) {
  var count = x
  return function() {
    if (count > 1){
    count -= 1
    console.log("t-minus",count + 1)
    return("t-minus ",count + 1)
    }
    else if (count === 1) {
      console.log("Blast Off!")
      count -= 1
    }
    else {
      console.log("Rocket\'s already gone")
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
