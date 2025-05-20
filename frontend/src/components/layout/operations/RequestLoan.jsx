import { ArrowRightIcon } from "@heroicons/react/24/outline";

function RequestLoan() {
  return (
    <div className="flex flex-col justify-center items-start w-full bg-red-800 px-[3rem] py-[2.5rem] my-4 rounded-xl bg-gradient-to-br from-[#39b385] to-[#9be15d]">
      <span className="text-2xl font-bold mb-4">Request Loan</span>
      <div className="flex flex-col justify-center items-start w-full h-full">
        <form className="flex flex-row justify-start items-start w-full h-full gap-10">
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

export default RequestLoan;
