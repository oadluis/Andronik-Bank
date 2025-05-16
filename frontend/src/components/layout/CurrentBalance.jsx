function CurrentBalance() {
  return (
    <div className=" p-5 mt-[5rem]  w-3/4 flex justify-between">
      <div>
        <h2 className="text-3xl font-medium text-gray-800">Current Balance</h2>
        <p className="text-gray-500 font-medium">As of 23/03/2025</p>
      </div>
      <span className="text-4xl font-medium text-gray-800">$1000</span>
    </div>
  );
}

export default CurrentBalance;
