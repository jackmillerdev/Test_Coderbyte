function LongestWord(sen) {
  // code goes here
  sen = sen.replace(/[^\w\s]/gi, "");
  var arr = sen.split(" ");
  var max = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
}

// keep this function call here
LongestWord(readline());
