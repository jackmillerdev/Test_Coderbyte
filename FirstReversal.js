function FirstReverse(str) {
  // code goes here
  var arr = str.split("");
  arr.reverse();
  var string = arr.join("");
  return string;
}

// keep this function call here
FirstReverse(readline());
