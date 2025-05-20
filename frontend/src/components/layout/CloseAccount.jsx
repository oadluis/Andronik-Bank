import { ArrowRightIcon } from "@heroicons/react/24/outline";

function CloseAccount() {
  return (
    <div className="flex flex-col justify-center items-start w-full bg-red-800 px-[3rem] py-[1.7rem] my-4 rounded-xl bg-gradient-to-br from-[#e52a5a] to-[#ff585f]">
      <span className="text-2xl font-bold mb-4">Transfer Money</span>
      <div className="flex flex-col justify-center items-start w-full h-full">
        <form className="flex flex-row justify-start items-start w-full h-full gap-10">
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-gray-500 opacity-25 rounded-lg p-1 mb-2"
            />
            <label>Confirm User</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-gray-500 opacity-25 rounded-lg p-1 mb-2"
            />
            <label>Confirm Pin</label>
          </div>
          <button className="bg-white rounded-lg py-1 px-4 mb-2">
            <ArrowRightIcon className="size-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CloseAccount;
