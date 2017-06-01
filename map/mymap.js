var words = ["ground", "control", "to", "major", "tom"];

//my map function

function myMap (array, func) {
	newArray = [];
	array.forEach(function(value, index, arr) {
		newArray.push(func(value));
	});
	return newArray;
}

var newMap = myMap(words, function(word) {
  return word.length;
});

console.log(newMap);