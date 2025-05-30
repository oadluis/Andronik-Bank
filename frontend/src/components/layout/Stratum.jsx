import StratumCard from '../commom/StratumCard';

function CurrentLogs({ currentUser }) {
  const movements = currentUser?.movements;

  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Histórico de transações</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
            Mês atual
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
            Exportar
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descrição
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cateforia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <StratumCard />
            <StratumCard />
            <StratumCard />
            <StratumCard />
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CurrentLogs;

/*
{movements.map((movementValue, movementIndex) => (
        <StratumCard
          movementValue={movementValue}
          movementIndex={movementIndex}
        />
      ))}
*/
