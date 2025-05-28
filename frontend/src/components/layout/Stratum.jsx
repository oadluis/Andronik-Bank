import StratumCard from '../commom/StratumCard';

function CurrentLogs({ currentUser }) {
  const movements = currentUser?.movements;

  return (
    <div className="bg-white w-full h-[40rem] rounded-lg overflow-x-hidden overflow-y-auto px-3 py-3">
      {movements.map((movementValue, movementIndex) => (
        <StratumCard
          movementValue={movementValue}
          movementIndex={movementIndex}
        />
      ))}
    </div>
  );
}

export default CurrentLogs;
