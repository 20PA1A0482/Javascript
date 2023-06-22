function findMax(numbers) {
  var max = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
var numbers = [5, 8, 2, 16, 9];
var maxNumber = findMax(numbers);

console.log(maxNumber); // Output: 16