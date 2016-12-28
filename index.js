function doToElementsInArray (array, callback) {
  array.forEach(callback);
}

function changeCompletely (element, index, array) {
  array[index] = (Math.random() * 10).toString() + "!!!";
}

var animals = ["dog", "fish", "cat"];

doToElementsInArray(animals, changeCompletely);
