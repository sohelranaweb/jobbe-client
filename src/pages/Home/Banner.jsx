import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/sWVtgJC/banner-jobs.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="text-lg text-[#72B261]">
            LETS START YOUR CAREERS HERE!
          </h1>
          <h1 className="mb-5 text-4xl font-bold leading-snug">
            Looking for a career change? <br /> Browse our job listings now!
          </h1>
          <p className="mb-5">
            Explore our diverse job listings for a seamless career change.{" "}
            <br /> Find opportunities across various industries and kickstart
            your new <br />
            professional journey today!
          </p>
          <div className="flex justify-center">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn bg-[#72B261] text-white">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
