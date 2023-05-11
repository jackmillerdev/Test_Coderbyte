// Bracket Combinator

const BracketCombinations = (num) => {
  // code goes here
  const factorail = (n) => {
    let ans = 1;
    for (let i = n; i > 0; i--) {
      ans = ans * i;
    }
    return ans;
  };
  result = factorail(2 * num) / (factorail(num + 1) * factorail(num));

  return result;
};

// keep this function call here
console.log(BracketCombinations(readline()));
