'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'André Luis Barbosa',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* MÉTODOS SIMPLES DE ARRAY 

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// Cópia com Slice
console.log(arr.slice());
// Cópia com Spread
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // Aqui começa na posição 1 e deleta dois elementos na frente.

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// concatenando com Spread
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

// slice - retorna uma nova array fatiada, por isso o nome slice(fatia). O primeiro argumento passado é o índice que indica a partir de onde ele vai fatiar, o segundo é onde ele vai parar. Quando o parâmetro é negativo, ele começará a fatiar do final, isso é útil pois com -1 pegamos o ultimo elemento de cada array. Se chamarmos o slice sem nenhum argumento, ele praticamente cria uma cópia superficial de qualquer array.

// splice - a diferença entre ele e o slice é que o slice não altera a array principal, o splice altera. Quando se usa o splice para remover elementos, array principal ficará apenas com os elementos que não foram removidos, com a sobra. Ná prática ele é usado para excluir elementos de um array, não é visado o valor final dele.

// reverse - literalmente inverte uma array. É importante notar que este método altera a array original, ou seja, a original ficará revertida permanentemente até que a reversão seja desfeita.

// concat - serve para concatenar duas arrays. Primeiro é preciso chamar a array que vai receber o método e em seguida, nos argumentos, especificar qual será a outra array que será juntada. O concat não altera a matriz original.

// join - ele cria uma string com os elementos da array. Os argumentos que são passados para ele é o que vai ter entre os elementos da array quando forem transformados em string. Se não for colocado nada, ele retornará uma string única com todos os elementos juntos. Geralmente é passado como argumento um espaço vazio " " ou um hífen " - ", mas pode ser colcado qualquer coisa, exemplo: '*---*'.
*/

/* NOVO MÉTODO AT

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// formas de capturar o último elemento da array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('Jonas'.at(0));

// at - com esse método, podemos substituir os tradicionais colchetes para uma sintaxe mais moderna, com os últimos recursos da linguagem. Os argumentos dele funcionam da mesma forma que o SLICE, porem ele não cria uma nova array, apenas retorna o valor. Ele funciona também com strings

*/

/* FOR EACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Nova entrada de ${movement} 💵`);
//   } else if (movement < 0) {
//     console.log(`Nova saída de ${movement} ⭕`);
//   }
// }

movements.forEach(function (mov, index) {
  if (mov > 0) {
    console.log(`Movimentação ${index + 1}: Nova entrada de ${mov} 💵`);
  } else if (mov < 0) {
    console.log(`Movimentação ${index + 1}: Nova saída de ${mov} ⭕`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

// forEach - Por mais que o forEach seja mais fácil de entender, não tem como parar ele, ou seja, as intruções break and continue não funcionam.

*/

/* forEach with maps and sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (key, value, map) {
  console.log(`${key}: ${value}`);
});

*/
