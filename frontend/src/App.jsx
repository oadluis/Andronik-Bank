import {useState} from "react";

import Navbar from "./components/layout/Navbar";
import CurrentBalance from "./components/layout/CurrentBalance";
import CurrentLogs from "./components/layout/Stratum";
import TransferMoney from "./components/layout/operations/TransferMoney";
import RequestLoan from "./components/layout/operations/RequestLoan";
import CloseAccount from "./components/layout/operations/CloseAccount";
import Footer from "./components/layout/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // Função async que faz a requisição dos dados para a API
  // Fazer a chamada para a api soliciando os dados
  // Tratar o erro de requisição (login falhou)
  // Manter esses dados e enviar para o resto da aplicação

  const handleLogin = async (username, pin) => {
    try{
      const response = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, pin})
      })

      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login falhou');
      }

      const userData = await response.json();
      setCurrentUser(userData);

      console.log("Login bem sucedido! Dados do usuário:", userData);

    } catch (err) {
      console.error("Erro durante o login:", error.message);
      alert("Login falhou:" + error.message)
    }
  }


  return (
    <div className="h-[100dvh] bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <Navbar onLoginSubmit={handleLogin} currentUser={currentUser}/>

      {currentUser ? (
        <div className="h-full flex flex-col justify-center items-center">
        <CurrentBalance />
        <div className="flex justify-center items-center w-3/4">
          <div className="flex flex-col justify-center items-start w-2/4 px-5">
            <CurrentLogs />
          </div>
          <div className="flex flex-col justify-around items-start w-2/4">
            <TransferMoney />
            <RequestLoan />
            <CloseAccount />
          </div>
        </div>
        <div>
        </div>
          <Footer />
      </div>
      ): (null)}
      
    </div>
  );
}

export default App;
