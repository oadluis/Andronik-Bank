import Navbar from "./components/layout/Navbar";
import CurrentBalance from "./components/layout/CurrentBalance";
import CurrentLogs from "./components/layout/Stratum";

function App() {
  return (
    <div className="m-0 p-0 min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <CurrentBalance />
        <div className="flex justify-center items-center w-3/4">
          <div className="flex flex-col justify-center items-start w-2/4 pl-5 pr-5">
            <CurrentLogs />
          </div>
          <div className="w-2/4">
            <p>Haverá coisas aqui :)</p>
          </div>
        </div>
      </div>
    </div>
  );
  // Commit of day¹
}

export default App;
