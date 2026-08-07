function isPositive(input) {
    return ((Number.isInteger(input)) && (input >= 0));
}

function getAverage(list) {
  let sum = 0;
  let n = list.length;

  for(let i=0;i<n;i++) {
    sum += list[i];
  }

  return (sum/n).toFixed(2);;
  
}

function readInput(list) {
  var input;
  var isPos;
  
  do{
    input = Number(prompt("Enter a positive integer"));
    isPos = isPositive(input)

    if(isPos) {
      list.push(Number(input));
    }

  }while(isPos);
}

function displayStats(list, average, min, max) {
  alert(`For the list ${list}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}`);

}

function main() {
  let list = new Array;
  readInput(list);

  let average = (list.length) ? getAverage(list) : 0;
  let min = (list.length) ? Math.min(...list) : 0;
  let max = (list.length) ? Math.max(...list) : 0;

  displayStats(list, average, min, max);
}

main();

