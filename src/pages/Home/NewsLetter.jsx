const NewsLetter = () => {
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
            I recently purchased a Digitech smartwatch from this store, and it
            has truly exceeded my expectations. The watch is stylish,
            feature-packed, and works seamlessly with my smartphone. I am
            impressed with its accurate health monitoring and the long battery
            life. Digitech has won me over with this fantastic product
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
            I've been a fan of Digitech products for years, and this new laptop
            didn't disappoint. It's fast, reliable, and the build quality is
            top-notch. However, I had a minor issue with the touchpad drivers
            initially, but their customer support helped me resolve it promptly.
            Overall, I'm pleased with my purchase.
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
            Digitech's wireless earbuds are nothing short of amazing. The sound
            quality is exceptional, and they fit comfortably in my ears, even
            during workouts. The Bluetooth connectivity is seamless, and the
            battery life is impressive. If you're looking for high-quality
            audio, these earbuds are a must-have!.
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

export default NewsLetter;
