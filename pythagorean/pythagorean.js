var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// function pythagorean(x, y){
//   return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
// }

//how to access each key:value

var result = input.map(function(element){
	return Math.sqrt(Math.pow(element.x, 2) + Math.pow(element.y, 2));
});

console.log(result);

//TEST CASSES
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);