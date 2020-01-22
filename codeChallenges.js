function getMiddle(string) {
  let middle = stringArr / 2;
  if (string.length % 2 !== 0) {
    return string.charAt(Math.floor(middle));
  } else {
    return string.charAt(middle - 1) + string.charAt(middle);
  }
}
