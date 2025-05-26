function CurrentBalance({currentUser}) {
  const currentDate = new Date();

  return (
    <div className=" p-5  w-3/4 flex justify-between">
      <div>
        <h2 className="text-3xl font-medium text-gray-800">Current Balance</h2>
        <p className="text-gray-500 font-medium">{`As of ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}</p>
      </div>
      <p></p>
      <span className="text-[3rem] font-medium text-gray-800">{`$${currentUser?.movements.reduce((acumulador, valorAtual) => {return acumulador + valorAtual}, 0)}`}</span>
    </div>
  );
}

export default CurrentBalance;
