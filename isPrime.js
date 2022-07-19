function isPrime(num) {
  x = 0;
  if (num <= 1) {
    return false
      }

   else if (num > 1) {
    for (let i = (num-1); i > 1; i--) {
      if (Number.isInteger(num / i)) {
        x++;
      }
    }
  
  if (x > 0) {
    return false;
  } else {
    return true;
  }}
}

console.log(isPrime(900));
