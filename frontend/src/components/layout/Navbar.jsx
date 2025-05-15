import Login from "../commom/Login";

function Navbar() {
  return (
    <nav className="bg-transparent flex justify-between items-center pt-5 pb-5 pl-[4rem] pr-[4rem]">
      <h1 className="text-2xl font-medium text-gray-500">
        Welcome to Andronik Bank
      </h1>

      {/* add image latter */}

      <Login />
    </nav>
  );
}

export default Navbar;
