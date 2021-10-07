import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/common/Button";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login, loading, isError, currentUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loading) return;
    setError({});
    if (!password || !username) {
      return setError({ message: "Username and password is required!" });
    }

    login({ username, password });
  };

  useEffect(() => {
    console.log(isError);
    if (isError) {
      console.log("error");
      setError({
        message: "Wrong username or password",
      });
    } else {
      setError();
    }
  }, [isError]);

  return (
    <div className="container">
      <div className="max-w-sm bg-purple-50 mx-auto p-12 my-16">
        <h3 className="text-2xl font-semibold mb-4">Log in</h3>
        <p className="text-sm font-semibold text-red-500">
          {error && error.message}
        </p>
        <div className="my-4 flex flex-col items-ceter justify-center">
          <input
            type="text"
            className={inputStyle}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={
            "cursor-pointer bg-red-400 disabled:opacity-50 " +
            (loading && " opacity-50 cursor-not-allowed")
          }
          onClick={handleLogin}
        >
          <Button>Login</Button>
        </button>

        <p className="my-2">
          Do not have an account?{" "}
          <Link to="/register" className="underline">
            Register!
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle =
  "border-2 border-gray-400 focus:outline-none px-2 py-1.5 my-2";

export default Login;
