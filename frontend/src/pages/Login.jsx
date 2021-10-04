import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Login = () => {
  return (
    <div className="container">
      <div className="max-w-sm bg-purple-50 mx-auto p-12">
        <h3 className="text-2xl font-semibold mb-4">Log in</h3>
        <div className="my-4 flex flex-col items-ceter justify-center">
          <input type="text" className={inputStyle} placeholder="Username" />
          <input
            type="password"
            className={inputStyle}
            placeholder="Password"
          />
        </div>
        <Button>Login</Button>

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
