import { ArrowRightIcon } from '@heroicons/react/24/outline';

function RequestLoan() {
  return (
    <form className="bg-white p-5 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Solicitar empréstimo</h3>
      </div>
      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Valor do empréstimo
        </label>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-700">R$</span>
          <input
            type="text"
            className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            placeholder="0,00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parcelas
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500">
            <option value="">12 meses</option>
            <option value="">24 meses</option>
            <option value="">36 meses</option>
            <option value="">48 meses</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition">
          Solicitar empréstimo
        </button>
      </div>
    </form>
  );
}

export default RequestLoan;

/*
<div className="flex flex-col justify-center items-start w-full bg-red-800 px-[3rem] py-[2.5rem] my-4 rounded-xl bg-gradient-to-br from-[#39b385] to-[#9be15d]">
      <span className="text-2xl font-bold mb-4">Request Loan</span>
      <div className="flex flex-col justify-center items-start w-full h-full">
        <form className="flex flex-row justify-start items-start w-full h-full gap-10">
          <div className="flex flex-col justify-center items-center">
            
            
          </div>
          <button className="bg-white rounded-lg py-1 px-4 mb-2">
            <ArrowRightIcon className="size-6" />
          </button>
        </form>
      </div>
    </div>
*/
