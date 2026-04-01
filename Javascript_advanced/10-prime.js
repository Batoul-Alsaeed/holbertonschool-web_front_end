function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}

const startTime = performance.now();

// تشغيل الدالة 100 مرة
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

const endTime = performance.now();

console.log('Execution time of calculating prime numbers 100 times was ' + (endTime - startTime) + ' milliseconds.');
