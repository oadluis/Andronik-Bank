import Login from "../commom/Login";
import imageLogo from "../../assets/logo.png";

function Navbar({onLoginSubmit, currentUser}) {
  return (
    <nav className="bg-transparent flex justify-between items-center pt-5 pb-0 pl-[4rem] pr-[4rem]">
      <h1 className="text-2xl font-medium text-gray-500">
        {currentUser ? `Bem vindo ao Andronik Bank, ${currentUser.owner.split(' ')[0]}!` : `Bem vindo ao Andronik Bank`}
      </h1>
      <img src={imageLogo} alt="logo" className="size-12" />
      <Login onLoginSubmit={onLoginSubmit} currentUser={currentUser}/>
    </nav>
  );
}

export default Navbar;
