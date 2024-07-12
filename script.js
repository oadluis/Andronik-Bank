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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

console.log(createUsernames(accounts));
console.log(accounts);

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

//////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////
/*
// CODE CHALLENGE #1
const checkDogs = function (juliaAgeDogs, kateAgeDogs) {
  console.log(juliaAgeDogs);
  const juliaPetsWithoutCats = juliaAgeDogs.slice(1, -2);
  console.log(juliaPetsWithoutCats);
  const juliaAndKate = juliaPetsWithoutCats.concat(kateAgeDogs);

  juliaAndKate.forEach((dog, i) => {
    const dogType = dog >= 3 ? `adulto` : `filhote`;

    console.log(`O cahorro ${i + 1} tem ${dog} anos e é um ${dogType} `);
  });
  console.log(juliaAndKate);
};

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];
checkDogs(juliaDogs, kateDogs);

const juliaDogs2 = [9, 16, 6, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];
checkDogs(juliaDogs2, kateDogs2);
*/

/////////////////////////////////////////////////////////////////////
/*
// DATA TRANSFORMATIONS WITH MAP, FILTER AND REDUCE
//// transformação de dados com map, filter e reduce

METHODS:
- MAP
  - Outro método para fazer loop em arrays. É muito semelhante ao forEach com a diferença de que ele cria uma nova array com base na array original. Basicamente ele faz um loop em uma array, e em cada iteração aplica uma fanção de callback ao elemento atual da array.

  MDN description: O map()método é um método iterativo . Ele chama uma callbackFnfunção fornecida uma vez para cada elemento em um array e constrói um novo array a partir dos resultados.

  exemple: 

  const array1 = [3, 1, 4, 3, 2];
  const arrayMap = array1.map((num) => num * 2)

  result:
  array1 = [3, 1, 4, 3, 2];
  arrayMap = [6, 2, 8, 6, 4];


- FILTER
  - Como o próprio nome já sugere é um método feito para filtrar os elementos do array original que satisfaçam uma determinada condição.

  MDN description: O filter()método é um método iterativo . Ele chama uma callbackFnfunção fornecida uma vez para cada elemento em um array e constrói um novo array de todos os valores para os quais callbackFnretorna um valor verdadeiro . Os elementos do array que não passam no callbackFnteste não são incluídos no novo array.

  exemple:

  const array1 = [3, 1, 4, 3, 2];
  const array1Filtered = array1.filter((num) => num > 2);

  result
  array 1 //[3, 1, 4, 3, 2];
  array1Filtered // [3, 4, 3]; - os numeros 1 e 2 não passaram no teste

  Ou seja, os elementos que passarem no teste e forem verdadeiros entrarão na nova matriz gerada pelo método filter.

- REDUCE
  - Usado para condensar todos os elementos do array original em um único valor. Neste caso não tem um novo array, ma agora temos um único valor reduzido, um vlaor único.

  MDN description : O reduce()método é um método iterativo . Ele executa uma função de retorno de chamada "redutora" sobre todos os elementos no array, em ordem de índice ascendente, e os acumula em um único valor. Toda vez, o valor de retorno de callbackFné passado para callbackFnnovamente na próxima invocação como accumulator. O valor final de accumulator(que é o valor retornado de callbackFnna iteração final do array) se torna o valor de retorno de reduce().

  exemple:



*/

///////////////////////////////////////////////////////////

/*
MAP NA PRÁTICA
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const convertedForUsd = movements.map(function(mov){
//  return eur * eurToUsd;
//}) ----------------------- callback extenso

const convertedForUsd = movements.map(eur => eur * eurToUsd); // ------------- arrow function (mais limpo)

console.log(eurToUsd);
console.log(movements);
console.log(convertedForUsd);

// FOR OF
const newArray = [];
for (const mov of movements) {
  newArray.push(mov * eurToUsd);
}
console.log(newArray);

// FOR EACH
const arrayForeach = [];
movements.forEach(mov => {
  arrayForeach.push(mov * eurToUsd);
});
console.log(arrayForeach);

// O que destaque o metodo MAP de outros métodos como o FOR OF e o FOR EACH é que para resolver o problema nos  dois últimos casos é preciso criar uma array manualmente para obter o resultado resejado, já com o método MAP não é preciso criar uma nova variável contendo um array, pois o método MAP já cria uma automaticamente.



*/

/*
Assim como o forEach, o método map também tem 3 parâmetros

1- o elemento atual
2- o indice
3- o array todo

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `Deposited` : `Withdrawal`} ${mov}`
);
console.log(movDescriptions);

*/
