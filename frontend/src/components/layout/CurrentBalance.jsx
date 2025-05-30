function CurrentBalance({ currentUser }) {
  const currentDate = new Date();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              Current Balance
            </h2>
            <span className="text-3xl font-bold text-gray-800 mt-1">{`$${currentUser?.movements.reduce(
              (acumulador, valorAtual) => {
                return acumulador + valorAtual;
              },
              0,
            )}`}</span>
            <p className="text-gray-500 font-medium">{`As of ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 grid grid-cols-3 gap-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-xs text-gray-500">Receitas</p>
          <p className="font-medium text-green-600">R$17.500</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Despesas</p>
          <p className="font-medium text-red-600">R$4.780</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Poupança</p>
          <p className="font-medium text-indigo-600">R$3.220</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
