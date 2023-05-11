function TreeConstructor(strArr) {
  const treeElements = strArr.map((i) =>
    i
      .replace(/[\(\)]/, "")
      .split(",")
      .map((i) => parseInt(i))
  );

  const childNodes = treeElements.map((i) => i[0]);
  const parentNodes = treeElements.map((i) => i[1]);

  // We shouldn't have 3 same parent and 2 same children
  return !(
    ("_" + parentNodes.sort().join("_") + "_").match(/(_\d+)\1\1_/) ||
    ("_" + childNodes.sort().join("_") + "_").match(/(_\d+)\1_/)
  );
}

// keep this function call here
console.log(TreeConstructor(readline()));
