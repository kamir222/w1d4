var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// a function that sorts that sorts students 
// first by name ascending alphabetically
// in cases where name === name go to age and 
// sort the smaller number before the larger number



//console.log(students[0].name);

var studentSorted = students.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  // names must be equal
  return 0;
});

console.log(studentSorted);