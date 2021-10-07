import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/common/Button";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { signup, loading, isError, currentUser } = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (loading) return;
    setError({});
    if (!email || !password || !username) {
      return setError({ message: "Email, username and password is required!" });
    }

    signup({ username, email, password });
  };

  useEffect(() => {
    console.log(isError);
    if (isError) {
      console.log("error");
      setError({
        message:
          "Something went wrong. The username or email may be in use. Try with another.",
      });
    }
  }, [isError]);

  return (
    <div className="container">
      <div className="max-w-sm bg-purple-50 mx-auto p-12 my-16">
        <h3 className="text-2xl font-semibold mb-4">Register</h3>
        <p className="text-sm font-semibold text-red-500">
          {error && error.message}
        </p>
        <div className="my-4 flex flex-col items-ceter justify-center">
          <input
            type="email"
            className={inputStyle}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          onClick={handleRegister}
        >
          <Button>Register</Button>
        </button>

        <p className="my-2">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle =
  "border-2 border-gray-400 focus:outline-none px-2 py-1.5 my-2";

export default Register;
