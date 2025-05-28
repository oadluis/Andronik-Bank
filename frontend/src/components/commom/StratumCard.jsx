function StratumCard({ movementValue, movementIndex }) {
  return (
    <div className="flex justify-between items-center w-full h-auto px-[2rem] py-[1.7rem] border-b border-gray-100">
      <span
        className={`font-medium text-white ${
          movementValue > 0
            ? `bg-gradient-to-tl from-[#39b385] to-[#9be15d]`
            : `bg-gradient-to-tl from-[#e52a5a] to-[#ff585f]`
        }  px-5 py-1 rounded-full`}
      >
        {`${movementIndex + 1} - ${
          movementValue > 0 ? 'Deposit' : 'Withdrawal'
        }`}
      </span>
      <span className="text-gray-500 font-medium text-xl">
        ${movementValue}
      </span>
    </div>
  );
}

export default StratumCard;
