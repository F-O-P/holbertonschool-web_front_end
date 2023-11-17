function countPrimeNumbers(){
  const startTime = performance.now();

  let count = 0;

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }

  const endTime = performance.now();
  console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
  return count;
}

const startTime100 = performance.now();
for(let i = 0; i < 100; i++){
setTimeout(countPrimeNumbers, 0); // <-- Change the delay to speed or slow down messages
}
const endTime100 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${endTime100 - startTime100} milliseconds.`);