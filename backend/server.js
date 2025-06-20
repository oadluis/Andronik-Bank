const express = require('express');
const cors = require('cors');

const account1 = {
  owner: 'Jonas Shmedtmann',
  username: 'js',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  username: 'jd',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  username: 'stw',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1.5,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  username: 'ss',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1.5,
  pin: 4444,
};

const account5 = {
  owner: 'André Andronik',
  username: 'aa',
  movements: [100, 200, 300, 400, 500],
  interestRate: 1.5,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

//////////////////////////////////////////////////////////////////qqq

const app = express();
const port = 3000;

app.use(cors()); // Middleware cors
app.use(express.json());

// Transferência bancária entre duas contas.
const transferMoney = (req, res) => {
  const { currentUser, userTarget, amount } = req.body;

  const accountTarget = accounts.find(
    (account) => account.username === userTarget,
  );

  currentUser.movements.push(-amount);
  accountTarget?.movements.push(Number(amount));
  res.status(200).json({ accountTarget, currentUser });
};

// Login
const login = (req, res) => {
  const { username, pin } = req.body;
  const currentAccount = accounts.find((acc) => acc.username === username);

  if (!currentAccount || currentAccount.pin !== Number(pin))
    return res
      .status(401)
      .json({ message: 'Login falhor. Usuário ou PIN incorretos.' });

  res.status(200).json(currentAccount);
};

app.post('/api/v1/transfer', transferMoney);
app.post('/api/v1/login', login);

//server
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
