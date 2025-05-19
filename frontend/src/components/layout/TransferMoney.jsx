import { ArrowRightIcon } from "@heroicons/react/24/outline";

function TransferMoney() {
  return (
    <div className="flex flex-col justify-center items-start w-full bg-red-800 px-[3rem] py-[1.7rem] my-4 rounded-xl bg-gradient-to-br from-[#ffb003] to-[#ffcb03]">
      <span className="text-2xl font-bold mb-4">Transfer Money</span>
      <div className="flex flex-col justify-center items-start w-full h-full">
        <form className="flex flex-row justify-start items-start w-full h-full gap-10">
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-gray-500 opacity-25 rounded-lg p-1 mb-2"
            />
            <label>TransferTo</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-gray-500 opacity-25 rounded-lg p-1 mb-2"
            />
            <label>Amount</label>
          </div>
          <button className="bg-white rounded-lg py-1 px-4 mb-2">
            <ArrowRightIcon className="size-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TransferMoney;

/*
<input type="text" />
        <label>TransferTo</label>
        <input type="text" />
        <label>Amount</label>

        
.operation--transfer {
    background-image: linear-gradient(to top left, #ffb003, #ffcb03);
  }
*/

/*
(Test code)
<div className="flex flex-row justify-start items-start w-full h-full">
          <input
            type="text"
            className="bg-gray-500 opacity-50 rounded-lg mr-[2rem] p-2"
          />
          <input type="text" className="bg-gray-300 rounded-lg p-2" />
        </div>
        <div>
          <label>TransferTo</label>
          <label>amount</label>
        </div>
*/
