import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Username"
        className="w-2/4 p-2 arrow-right bg-gray-300 opacity-75 rounded-xl"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-2/4 p-2 bg-gray-300 opacity-75 rounded-xl"
      />
      <button>
        <ArrowRightIcon className="size-6" />
      </button>
    </div>
  );
}

export default Login;
