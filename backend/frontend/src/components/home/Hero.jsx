import { Link } from "react-router-dom";
import Button from "../common/Button";

const Hero = () => {
  return (
    <div style={{ height: 500 }} className="bg-purple-50">
      <div className="container h-full w-full flex items-center justify-center relative">
        <img
          src={"https://i.ibb.co/cXFnLLV/3.png"}
          className="object-cover h-full absolute lg:relative opacity-70 md:opacity-100 left-0"
          alt="Shop"
        />
        <div className="flex flex-col items-center text-center px-8 py-6 rounded-lg z-10 ml-0 md:ml-72 lg:ml-0">
          <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-snug tracking-wider">
            Clumsy Clothes
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mb-6">
            Exclusive products for summer sale!
          </p>
          <Link to="/products">
            <Button className="text-lg font-semibold">Shop Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
