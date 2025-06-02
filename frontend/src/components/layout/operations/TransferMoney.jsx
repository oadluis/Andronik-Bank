import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';

function TransferMoney({ onTransferSubmit, currentUser }) {
  const [userTarget, setUserTarget] = useState(null);
  const [amount, setAmount] = useState(null);

  const transferMoneySubmit = (e) => {
    e.preventDefault();
    console.log('Valor do target:' + userTarget);
    console.log('Valor do amount:' + amount);

    onTransferSubmit(currentUser, userTarget, amount);

    setUserTarget('');
    setAmount('');
  };

  return (
    <form
      className="bg-white p-5 rounded-xl shadow-md"
      onSubmit={transferMoneySubmit}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Transferir Dinheiro</h3>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <CurrencyDollarIcon className="text-blue-600 size-6" />
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transfer To
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-3 text-gray-400 size-5" />
            <input
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              type="text"
              placeholder="Nome ou conta"
              value={userTarget}
              onChange={(e) => setUserTarget(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-700">R$</span>
            <input
              className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              placeholder="0,00"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            onTransferSubmit={onTransferSubmit}
            className="flex justify-center align-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
          >
            <p>Transferir agora</p>
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransferMoney;
