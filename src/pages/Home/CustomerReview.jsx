const CustomerReview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-[#72B261] p-4">
          <div className="flex justify-center gap-4">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/XkCKzf3/u3.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center">
            Jobbe is a fantastic platform! It streamlined my job search by
            offering a wide range of job opportunities in one place. The
            application process was straightforward, and the constant updates on
            new listings kept me engaged. I secured an amazing
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-[#72B261] italic">
                Sohel Rana
              </h1>
              <p className="italic">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="border border-[#72B261] p-4">
          <div className="flex justify-center gap-4">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/g4ZGRPg/u4.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center">
            Using Jobbe was a game-changer for me. The personalized job
            recommendations matched my skills perfectly. The site's efficient
            search filters and regular updates on new listings made job hunting
            stress-free. I landed a great job quickly. Thank you, Jobbe!
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-[#72B261] italic">
                Jane Smith
              </h1>
              <p className="italic">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="border border-[#72B261] p-4">
          <div className="flex justify-center gap-4">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/gjfDhfM/u1.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center">
            Jobbe made my job search a breeze! The interface is user-friendly,
            and the variety of job listings is impressive. I found the perfect
            role within days of signing up. Highly recommended for anyone
            seeking a seamless job hunting experience..
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-[#72B261] italic">
                John Doe
              </h1>
              <p className="italic">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
