const express = require("express");
const cors = require("cors");

const account1 = {
    owner: 'Jonas Shmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
}

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
}

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1.5,
    pin: 3333,
}

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1.5,
    pin: 4444,
}

const accounts = [account1, account2, account3, account4];

const app = express();
const port = 3000;

app.use(cors()); // Middleware cors
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Andronik App funcionando!")
})

app.post('api/v1/login', (req, res) => {
    const {username, pin} = req.body;

    const currentAccount = accounts.find(
        acc => acc.username === username
    )

    if (currentAccount?.pin === Number(pin)) {
        res.status(200).json(currentAccount)
    } else {
        res.status(400).json({message: 'Login falhou. Usuário ou PIN incorrertos.'})
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})