function findWaldo(arr, found) {
  arr.forEach(function(index2) {
    if (index2 === "Waldo") {
      found(arr.indexOf(index2));   // execute callback
    }
  })
}

function actionWhenFound(index) {

  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
