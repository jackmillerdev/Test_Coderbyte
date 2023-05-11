function FindIntersection(strArr) {
  const intersection = [];
  const arr1 = strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");

  arr1.map((item) => {
    if (arr2.includes(item)) {
      intersection.push(item);
    }
  });

  return intersection.join(",");
}

// keep this function call here
console.log(FindIntersection(readline()));
