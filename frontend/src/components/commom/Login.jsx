import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function Login({ onLoginSubmit }) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(username, pin);

    setUsername('');
    setPin('');
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handlerFormSubmit}>
      <input
        type="text"
        placeholder="Username"
        className="w-2/4 p-2 arrow-right bg-gray-300 opacity-75 rounded-xl"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        className="w-2/4 p-2 bg-gray-300 opacity-75 rounded-xl"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button>
        <ArrowRightIcon className="size-6" />
      </button>
    </form>
  );
}

export default Login;
