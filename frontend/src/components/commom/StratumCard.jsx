function StratumCard({ movementValue }) {
  return (
    <div className="flex justify-between items-center w-full h-auto p-5">
      <span
        className={`font-medium text-white ${
          movementValue > 0
            ? `bg-gradient-to-tl from-[#39b385] to-[#9be15d]`
            : `bg-red-800`
        }  px-4 py-2 rounded-full`}
      >
        1 deposit
      </span>
      <span className="text-gray-500 font-medium">${movementValue}</span>
    </div>
  );
}

export default StratumCard;
