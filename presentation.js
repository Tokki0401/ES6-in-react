// =================================
// ============   ES6   ============
// =================================

// 1. Template Literals

var name = 'Joel';

// ES5
console.log('Please don\'t nominate ' + name + ' for pep tonight :(');

// ES6
console.log(`And now people are going to nominate ${name}...`);
















// 2. Destructuring Assignment

var car = {
  year: 2019,
  make: 'Honda',
  model: 'Civic',
  color: 'Blue'
}

var { color, model } = car;

// console.log(color);    // 'Blue'
// console.log(model);   // 'Civic'

var { cost } = car;
// console.log(cost);    // undefined












// 3. Ternary Operator

var helper = -3;

helper = helper > 0 ? 100 : -100;
// console.log(helper);












// 4. Arrow Function

var example1 = (a, b) => {
  return a * b;
}

// console.log(example1(3,4)); // 12



var example2 = (c, d) => ({ product: c * d });

// console.log(example2(2, 10));   // { product: 20 }






// =================================
// ===   Higher Order Function   ===
// =================================


// 1a. forEach

var example3 = [3,6,10,4,3];

// for (let i = 0; i < example3.length; i++) {
//   console.log(`At index ${i}: ${example3[i]}`);
// }

// example3.forEach((currentValue, index) => {
//   console.log(`At index ${index}: ${currentValue}`);
// })







// 1b. Nested forEach

var example4 = [[0, 1, 0],
                [1, 4, 1],
                [0, 1, 0]];


// for (let i = 0; i < example4.length; i++) {
//   for (let j = 0; j < example4[i].length; j++) {
//     console.log(example4[i][j]);
//   }
// }

// example4.forEach(row => {
//   row.forEach(col => {
//     console.log(col);
//   })
// })







// 2. Reduce

var example5 = [
  { name: 'Bob', age: 23 },
  { name: 'Tim', age: 14 },
  { name: 'Soo', age: 16 },
  { name: 'Kim', age: 40 },
  { name: 'XAE A-12', age: 1 }
]

var newData = example5.reduce((acc, person) => {
  if (person.age >= 21) {
    acc.push({ person });
  }

  return acc;
}, []);

// console.log(newData);