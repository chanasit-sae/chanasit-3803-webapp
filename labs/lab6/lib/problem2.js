function isPositive(input) {
  let inputIsPositive = ((Number.isInteger(input)) && (input >= 0));
  return inputIsPositive;
}

function getAverage(list) {
  let sum = 0;
  let n = list.length;

  for(let i=0;i<n;i++) {
    sum += list[i];
  }

  return (sum/n).toFixed(2);;
  
}

function readInput() {
  var input;
  var isPos;
  let list = new Array;
  
  do{
    input = Number(prompt("Enter a positive integer"));
    isPos = isPositive(input)

    if(isPos) {
      list.push(Number(input));
    }

  }while(isPos);

  return list;
}

function displayStats(list, average, min, max) {
  alert(`For the list ${list}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}`);

}

function main() {

  let list = readInput();

  let average = (list.length) ? getAverage(list) : 0;
  let min = (list.length) ? Math.min(...list) : 0;
  let max = (list.length) ? Math.max(...list) : 0;

  displayStats(list, average, min, max);
}

main();

