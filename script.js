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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const output = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(output)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Hundler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // previne o comportamento padrão do botão enviar
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Uptade the page
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // fazendo a transferência
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Uptade the page
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // adicionar saldo positivo ao saldo
    currentAccount.movements.push(amount);
    // atualizar a ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount?.username &&
    Number(inputClosePin.value) === currentAccount?.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    //hide
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

//////////////////////////////////////////////////

/*FILTER NA PRÁTICA

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Usando o método filter para adicionar elementos verdadeiros dentro de um novo array dinamicamente
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// Mesma função usando o for of para comparação
const truthElements = [];
for (const mov of movements) {
  if (mov > 0) {
    truthElements.push(mov);
  }
}
console.log(truthElements);

// Usando o filter para inserir dinamicamente as saídas do movement

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

// O método filter assim como o método map também retorna uma array, mas só entram nesse novo array aqueles elementos que atenderem a condição especificada, ou seja, passarem no filtro.
*/

////////////////////////////////////////////////////////////

/*REDUCE METHOD NA PRÁTICA*/
/*
 1 - O primeiro parâmetro do metodo reduce é algo chamado de 'acumulador', diferente dos métodos map, filter e forEach, que o primeiro parâmetro deles é o elemento atual. Esse acumulador é como uma bola de neve que vai acumulando a cada iteração

 2 - funciona como valor inicial, esse é o segundo argumento do reduce

 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const balance = movements.reduce((acc, cur) => acc + cur, 0); //2 ;
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// A vantagem que o reduce tem em sobre o for of é a mesma que os outro métodos tem, com o reduce não é necessário criar uma variável extra para resolver o problema, com o for of por sua vez é obrigatório para fazer acontecer

// Valor maximo

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

//////////////////////////////////////////////
/*CODING CHALLANGE

const calcAvaregeHuman = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(dog => dog >= 18);
  const media = adults.reduce((acc, crr) => (acc += crr)) / adults.length;

  return media;
};

const ageDogs1 = [5, 2, 4, 1, 15, 8, 3];
const ageDogs2 = [16, 6, 10, 5, 6, 1, 4];

const avg1 = calcAvaregeHuman(ageDogs1);
const avg2 = calcAvaregeHuman(ageDogs2);

console.log(avg1, avg2);
*/

/*
USANDO OS TRÊS METODOS JUNTOS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const totalDepositsUSD = Math.trunc(
  movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0)
);
console.log(totalDepositsUSD);

*/

////////////////////////////////////
/*
CODING CHALLANGE 3

Esse desafio coloca em prática a habilidade de encadear vários métodos de uma vez para gerarem um resultado.

const calcAvaregeHuman = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(dog => dog >= 18);
  const media = adults.reduce((acc, crr) => (acc += crr)) / adults.length;

  return media;
};

const calcAvaregeHuman = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const teste1 = [5, 2, 4, 1, 15, 8, 3];
const teste2 = [16, 6, 10, 5, 6, 1, 4];

const avg1 = calcAvaregeHuman(teste1);
const avg2 = calcAvaregeHuman(teste2);

console.log(avg1, avg2);

*/

///////////////////////////////////
/*
MÉTODO FIND - recuperar

Como o próprio nome já diz, o método find serve para recuperar um elemento de um array com base em uma condição.

Ao contrário do método filter, o find não retorna uma nova array, mas retornará apenas o primeiro elemento na array que satisfaça essa condição 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawl = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawl);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Mesmo efeito com FOR OF!
for (const acc of accounts) {
  const conta = acc.owner;
  if (conta === 'Jessica Davis') {
    console.log('Chegamos na Jessica Davis com for of!');
    console.log(acc);
  };
};

*/

////////////////////////////////////////////////
/*
MÉTODO FINDINDEX

FindIndex é bem parecido com o método find, mas como o próprio nome já diz ele retorna o index do elemento encontrado e não o elemento em si.
*/

/////////////////////////////////////////////////
/*
MÉTODO SOME E MÉTODO EVERY

O método some retorna true se pelo menos 1 elemento da array atender uma condição específica.

Já o método every retorna true apenas se todos os elementos de um array satisfazerem uma condição

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// Verifica a igualdade
console.log(movements.includes(-130));

// Verifica com base na condição
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// Every
console.log(account4.movements.every(mov => mov > 0));

// Callback separado
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/

/////////////////////////////////////////////
/*
MÉTODO FLAT E FLATMAP

flat - ele simplesmente desaninha todo o array deixando tudo flat (plano). Ele atinge apenas o primeiro nível de alinhamento, se tiver mais de um nível de aninhamento ele não deixa plano, apenas no primeiro nível. Para resolver esse problema podemos passar o nível de profundidade que o flat deve atingir, no caso, o número passado como argumento para o flat será o nível de porfundidade que ele vai operar;


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Flat
const somaMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, crr) => acc + crr);
console.log(somaMovements);

// Flatmap
const somaMovements2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, crr) => acc + crr);
console.log(somaMovements2);

*/

////////////////////////////////////////////////
/*
MÉTODO SORT

//strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// return < 0, A B (mantem a ordem)
// return < 0, A B (muda a ordem)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// outra forma de fazer
movements.sort((a, b) => a - b);
console.log(movements);

// decrescente
movements.sort((a, b) => b - a);
console.log(movements);


*/

const x = new Array(7);
console.log(x);
