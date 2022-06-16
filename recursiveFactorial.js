function recursiveFactorial(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFactorial(n - 1) + recursiveFactorial(n - 2);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(8));

// Big O = O(2^n)
