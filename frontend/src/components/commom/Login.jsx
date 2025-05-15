import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Username"
        className="p-3 bg-gray-300 rounded-xl"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 bg-gray-300 rounded-xl"
      />
      <button>
        <ArrowLongRightIcon className="size-8" />
      </button>
    </div>
  );
}

export default Login;
