function findPrimes(limit) {
  let isPrime = new Array(limit+1).fill(1);
  let answer = new Array;
  isPrime[0] = 0;
  isPrime[1] = 0;
  for(let i=2 ; i*i<=limit ; i++) {
    if(isPrime[i]) {
      for(let j=i ; j*i <= limit; j++) isPrime[j*i] = 0;
    }
  }
  for(let i=0;i<=limit;i++) {
    if(isPrime[i]) answer.push(i);
  }
  return answer;
}

function validateInput(input) {
  return ((Number.isInteger(input)) && (input > 0));
}

function displayPrimes(primes, limit) {
  alert(`For n = ${limit} prime numbers are ${primes}`);

}

function main() {
  var input;
  do{
    input = Number(prompt("Enter a positive integer"));
  }while(!validateInput(input));

  let primes = findPrimes(input);
  displayPrimes(primes, input);

}

main();
