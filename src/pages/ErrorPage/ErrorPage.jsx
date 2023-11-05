import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" mt-24">
      <div className="flex justify-center">
        <img
          className="w-[400px]"
          src="https://i.ibb.co/x30qrdv/error-2.jpg"
          alt=""
        />
      </div>
      <p className="text-center text-xl">
        Go Back{" "}
        <Link to="/" className="text-2xl text-[#72B261] font-semibold">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
