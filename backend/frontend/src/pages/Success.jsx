import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Success = () => {
  return (
    <div className="container">
      <div className="max-w-md mx-auto shadow-md flex justify-center items-center bg-gray-200 rounded-md py-12">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-xl">Order placed successfully.</p>
          <Link to="/" className="mt-8 inline-block ">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
