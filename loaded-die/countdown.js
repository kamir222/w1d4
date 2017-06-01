var countdownGenerator = function (x) {  
  var x = x + 1;
  var blastoff = '';


  return function() {
  	if (x > 1) {
  		x -= 1;
  		return "T-minus " + x  + "..."
  	} else {
  		if (blastoff === '') {
  			blastoff += "Blast Off!"
  		return blastoff;
  	} else {
  		
  	 return "Rockets already gone, bub!"
  	}
  		
  	}

  }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
