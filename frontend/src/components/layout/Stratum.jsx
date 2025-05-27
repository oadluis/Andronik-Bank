import StratumCard from '../commom/StratumCard';

function CurrentLogs({ currentUser }) {
  const movements = currentUser?.movements;
  // console.log(movements);

  return (
    <div className="bg-white w-full h-[40rem] rounded-lg overflow-x-hidden overflow-y-auto px-3 py-3">
      {movements.map((movementValue) => (
        <StratumCard movementValue={movementValue} />
      ))}
    </div>
  );
}

export default CurrentLogs;

/*
<StratumCard />
      <StratumCard />
      <StratumCard />
      <StratumCard />
      <StratumCard />
      <StratumCard />
      <StratumCard />
      <StratumCard />
*/
