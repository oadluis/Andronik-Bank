function TransferMoney() {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full bg-red-800 p-[3rem]">
      <span className="text-2xl font-bold">Transfer Money</span>
      <div className="flex flex-col justify-center items-start w-full h-full bg-blue-800">
        <div className="flex flex-row justify-start items-start w-full h-full">
          <input
            type="text"
            className="bg-gray-300 opacity-75 rounded-lg mr-[2rem]"
          />
          <input type="text" className="bg-gray-300 rounded-lg" />
        </div>
        <div>
          <label>TransferTo</label>
          <label>amount</label>
        </div>
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
*/
