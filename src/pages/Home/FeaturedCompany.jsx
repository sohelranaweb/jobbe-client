const FeaturedCompany = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* img div  */}
      <div className="grid grid-cols-4 lg:gap-4 gap-2  p-2">
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/TPL3JM5/1.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/72wD9Yr/7.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/tQv59wb/3.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/7kfCYXf/8.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/KhpcxG5/13.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/s5FxKp0/6.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/tKCZkn5/9.jpg" alt="" />
        </div>
        <div className="md:w-[120px] md:h-[120px] w-[90px] h-[100px] border">
          <img src="https://i.ibb.co/b2MXvBk/10.jpg" alt="" />
        </div>
      </div>
      {/* text area  */}
      <div className="flex items-center flex-1 ">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold lg:text-start text-center">
            Featred Company
          </h1>
          <p className="lg:text-start text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            sit. Soluta officiis dolorem rem praesentium architecto? Nesciunt
            sit eaque dolor, eligendi enim repellat, porro praesentium
            laboriosam, rem labore at eveniet!
          </p>
          <div className="flex lg:justify-start justify-center">
            <button className="btn bg-[#72B261] text-white">
              Browse company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompany;
