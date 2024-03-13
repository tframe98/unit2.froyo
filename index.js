// write a function that counts flavors
const countFlavors = (flavors) => {
  const flavorCounts = {};
  const flavorList = flavors.split(','); //'flavors' is the string that contains all the frozen yogurt, 'split(',')' allows me to to split the 'flavors' string where a comma is ','


flavorList.forEach(flavor => { //loop going through the flavors in 'flavorList', 'flavor => starts the count in the array
  if (flavorCounts[flavor]) { //checking for multiple flavors
    flavorCounts[flavor]++; //adds count to flavors by 1
} else { //if its a new flavor start new pile
  flavorCounts[flavor] = 1; //starts the count of the new pile
}
});

return flavorCounts;
};

// prompt the user to enter the list of froyo flavors

const flavorsInput = prompt("Please enter what froyo flavors you'd like! (if more than one use commas to separate them)");
if (flavorsInput) {
  const counts = countFlavors(flavorsInput);
  
}


const counts = countFlavors(flavorsInput);
console.log(counts);