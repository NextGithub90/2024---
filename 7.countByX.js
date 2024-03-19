// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }
// console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(countBy(2, 5), [2, 4, 6, 8, 10]);

// atau
function countBy(x, n) {
  return [...Array(n)].map((e, i) => (i + 1) * x);
}
console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);