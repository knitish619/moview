import { useState } from "react";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button>Login</button>
    </div>
  );
}

export default Login;