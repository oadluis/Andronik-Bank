import Navbar from "./components/layout/Navbar";
import CurrentBalance from "./components/layout/CurrentBalance";

function App() {
  return (
    <div className="m-0 p-0 min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center">
        <CurrentBalance />
      </div>
    </div>
  );
}

export default App;
