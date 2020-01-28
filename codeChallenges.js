function getMiddle(string) {
  let middle = stringArr / 2;
  if (string.length % 2 !== 0) {
    return string.charAt(Math.floor(middle));
  } else {
    return string.charAt(middle - 1) + string.charAt(middle);
  }
}

function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i), i * 1000;
    });
  }
}

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
