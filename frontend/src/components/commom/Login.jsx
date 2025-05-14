function Login() {
  return (
    <div className="flex items-center gap-2 bg-red-500">
      <input type="text" placeholder="Username" className="p-2 bg-green-300" />
      <input
        type="password"
        placeholder="Password"
        className="p-2 bg-blue-300"
      />
      <button>Login</button>
    </div>
  );
}

export default Login;
