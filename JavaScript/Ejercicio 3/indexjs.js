let N = 1;
for (let i = 1; i <= 10; i++) {
  N *= i;
}
console.log(N); 


let n = 10;
let factorial = 1;
while (n > 1) {
  factorial *= n;
  n--;
}
console.log(factorial); 


let num = 10;
let fac = 1;
while (true) {
  if (num === 0) {
    break;
  }
  fac *= num;
  num--;
}
console.log(fac); 
