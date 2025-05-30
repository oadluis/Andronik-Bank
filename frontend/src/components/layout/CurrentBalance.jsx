function CurrentBalance({ currentUser }) {
  const currentDate = new Date();

  return (
    <div className="p-5 my-5 w-auto flex justify-between bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <h2 className="text-xl font-medium text-gray-500">Current Balance</h2>
        <span className="text-3xl font-medium text-gray-800">{`$${currentUser?.movements.reduce(
          (acumulador, valorAtual) => {
            return acumulador + valorAtual;
          },
          0,
        )}`}</span>
        <p className="text-gray-500 font-medium">{`As of ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default CurrentBalance;
