import Login from "../commom/Login";
import { BanknotesIcon } from '@heroicons/react/24/outline';

function Navbar({onLoginSubmit, currentUser}) {
  return (
    <nav className="bg-white flex justify-between align-center py-4 px-[1rem] shadow-md">
      {currentUser ? (
        <div className="flex items-center gap-4">
        <div>
          <BanknotesIcon className="size-10 p-1 text-white bg-purple-500 rounded-full"/>
        </div>
        <div className={`flex flex-col align-center`}>
          <h1 className="text-xl font-bold">Andronik Bank</h1>
          <br/>
          <div className={`flex gap-2`}>
          <p className="text-gray-500 font-medium">Bem vindo,</p>
          <p className={`text-purple-800 font-medium`}>{` ${currentUser.owner.split(' ')[0]}!`}</p>
          </div>
        </div>
        </div>
      ) : <h1 className="text-2xl font-bold">Andronik Bank</h1>}
      <Login onLoginSubmit={onLoginSubmit} currentUser={currentUser}/>
    </nav>
  );
}

export default Navbar;