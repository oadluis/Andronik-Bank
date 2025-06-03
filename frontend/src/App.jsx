import { useState } from 'react';

import Navbar from './components/layout/Navbar';
import CurrentBalance from './components/layout/CurrentBalance';
import Protection from './components/layout/Protection';
import CurrentLogs from './components/layout/Stratum';
import TransferMoney from './components/layout/operations/TransferMoney';
import RequestLoan from './components/layout/operations/RequestLoan';
import ConfirmPayment from './components/layout/operations/ConfirmPayment';
import Footer from './components/layout/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [targetData, setTargetData] = useState(null);

  const handleLogin = async (username, pin) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, pin }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login falhou');
      }

      const userData = await response.json();
      setCurrentUser(userData);

      console.log('Login bem sucedido! Dados do usuário:', userData);
      const currentUserServer = currentUser;
      return currentUserServer;
    } catch (err) {
      console.error('Erro durante o login:', err.message);
      alert('Login falhou:' + err.message);
    }
  };

  const transferMoney = async (currentUser, userTarget, amount) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentUser, userTarget, amount }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'A requisição falhou!');
      }

      const responseData = await response.json();
      setTargetData(responseData);
      setCurrentUser(responseData.currentUser);
    } catch (error) {
      console.error('Erro ao tranferir o valor!', error.message);
    }
  };

  return (
    <div className="h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <Navbar onLoginSubmit={handleLogin} currentUser={currentUser} />

      {currentUser ? (
        <>
          <main className="mx-auto my-5 max-w-5xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
              <CurrentBalance currentUser={currentUser} />
              <Protection />
            </div>

            <div className="">
              <CurrentLogs currentUser={currentUser} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              <TransferMoney
                onTransferSubmit={transferMoney}
                currentUser={currentUser}
              />
              <RequestLoan />
              <ConfirmPayment />
            </div>

            <div></div>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : null}
    </div>
  );
}

export default App;
