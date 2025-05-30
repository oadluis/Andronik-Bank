import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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
    <div className="flex flex-col justify-center items-start w-full bg-red-800 px-[3rem] py-[2.5rem] my-4 rounded-xl bg-gradient-to-br from-[#ffb003] to-[#ffcb03]">
      <span className="text-2xl font-bold mb-4">Transfer Money</span>
      <div className="flex flex-col justify-center items-start w-full h-full">
        <form
          className="flex flex-row justify-start items-start w-full h-full gap-10"
          onSubmit={transferMoneySubmit}
        >
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-[#d99a00] rounded-lg p-1 mb-2 text-black"
              value={userTarget}
              onChange={(e) => setUserTarget(e.target.value)}
            />
            <label>Transfer To</label>
          </div>
          <br />
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-[#d99a00] opacity-25 rounded-lg p-1 mb-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label>Amount</label>
          </div>
          <button
            onTransferSubmit={onTransferSubmit}
            className="bg-white rounded-lg py-1 px-4 mb-2"
          >
            <ArrowRightIcon className="size-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TransferMoney;
