import Login from '../commom/Login';
import { BanknotesIcon } from '@heroicons/react/24/outline';

function Navbar({ onLoginSubmit, currentUser }) {
  return (
    <nav className="sticky top-0 z-10 flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      {currentUser ? (
        <div className="flex items-center mb-4 md:mb-0">
          <div>
            <BanknotesIcon className="size-8 p-1 text-white bg-purple-500 rounded-full mr-3" />
          </div>
          <div className={`flex flex-col align-center`}>
            <h1 className="text-xl font-bold">Andronik Bank</h1>
            <br />
            <div className={`flex gap-2`}>
              <p className="text-sm text-gray-500">
                Bem vindo,{' '}
                <span className="text-purple-800 font-medium">{`${
                  currentUser.owner.split(' ')[0]
                }!`}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold">Andronik Bank</h1>
      )}
      <Login onLoginSubmit={onLoginSubmit} currentUser={currentUser} />
    </nav>
  );
}

export default Navbar;
