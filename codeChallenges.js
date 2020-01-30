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

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
function numPrimorial(n) {
  let count1 = 1;
  let count2 = 1;
  let result = 1;
  while (count1 <= n) {
    if (isPrime(count2)) {
      result = result * count2;
      count1++;
    }
    count2++;
  }
  return result;
}

// return the lowest number you can add or subtract from a, before it becomes a multiple of x
function minimum(a, x) {
  let totalAdded = a;
  let totalSubtracted = a;
  let addedCount = 0;
  let subtractedCount = 0;
  while (totalAdded % x !== 0) {
    totalAdded++;
    addedCount++;
  }
  while (totalSubtracted % x !== 0) {
    totalSubtracted--;
    subtractedCount++;
  }
  return addedCount < subtractedCount ? addedCount : subtractedCount;
}
