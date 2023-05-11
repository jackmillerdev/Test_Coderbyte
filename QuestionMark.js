function QuestionsMarks(str) {
  var regex = /(\d)[a-z]*(\??[a-z]*\??[a-z]*\??)[a-z]*(\d)/;

  var uniqued = new Set();

  while (str.length > 0) {
    var match = regex.exec(str);
    if (match !== null && parseInt(match[1]) + parseInt(match[3]) >= 10)
      uniqued.add(match[2]);
    str = str.replace(str[0], "");
  }

  var Qtested = Array.from(uniqued).map((x) => x.match(/\?/g).length === 3);

  return Qtested.length === 0 || Qtested.indexOf(false) !== -1
    ? "false"
    : "true";
}
