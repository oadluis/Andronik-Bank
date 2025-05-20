import Navbar from "./components/layout/Navbar";
import CurrentBalance from "./components/layout/CurrentBalance";
import CurrentLogs from "./components/layout/Stratum";
import TransferMoney from "./components/layout/TransferMoney";
import RequestLoan from "./components/layout/RequestLoan";
import CloseAccount from "./components/layout/CloseAccount";

function App() {
  return (
    <div className="m-0 p-0 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <CurrentBalance />
        <div className="flex justify-center items-center w-3/4">
          <div className="flex flex-col justify-center items-start w-2/4 pl-5 pr-5">
            <CurrentLogs />
          </div>
          <div className="flex flex-col justify-around items-start w-2/4">
            <TransferMoney />
            <RequestLoan />
            <CloseAccount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
