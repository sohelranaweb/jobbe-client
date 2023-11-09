import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useState } from "react";
import JobCategoryCard from "./JobCategoryCard";
import FeaturedCompany from "./FeaturedCompany";
import NewsLetter from "./NewsLetter";

const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const [tab, setTab] = useState(1);
  const activeTab = (tabNumber) => {
    setTab(tabNumber);
  };
  const onSite = loadedData.filter(
    (product) => product.job_category === "On Site Job"
  );
  const remote = loadedData.filter(
    (product) => product.job_category === "Remote Job"
  );
  const hybrid = loadedData.filter(
    (product) => product.job_category === "Hybrid"
  );
  const partTime = loadedData.filter(
    (product) => product.job_category === "Part Time"
  );
  const data =
    tab === 1
      ? onSite
      : tab === 2
      ? remote
      : tab === 3
      ? hybrid
      : tab === 4
      ? partTime
      : null;
  // console.log(data);
  return (
    <div className="lg:px-0 px-4">
      {/* Banner section  */}
      <div className="my-16">
        <Banner></Banner>
      </div>

      {/* Job category section  */}
      <div className="mb-16">
        <h1 className="text-center text-3xl font-bold">Job Category</h1>
        {/* tab  */}
        <div className=" lg:w-2/4 lg:h-16 my-10 lg:mx-auto lg:flex lg:justify-between items-center space-y-2">
          <div
            onClick={() => activeTab(1)}
            style={{ borderBottom: tab === 1 ? "5px solid yellow" : "" }}
            className="text-white text-center px-4 py-2 bg-[#72B261] rounded-full"
          >
            On Site Job
          </div>

          <div
            onClick={() => activeTab(2)}
            style={{ borderBottom: tab === 2 ? "5px solid yellow" : "" }}
            className="text-white px-4 py-2 bg-[#72B261] rounded-full"
          >
            Remote Job
          </div>
          <div
            onClick={() => activeTab(3)}
            style={{ borderBottom: tab === 3 ? "5px solid yellow" : "" }}
            className="text-white px-4 py-2 bg-[#72B261] rounded-full"
          >
            Hybrid
          </div>
          <div
            onClick={() => activeTab(4)}
            style={{ borderBottom: tab === 4 ? "5px solid yellow" : "" }}
            className="text-white px-4 py-2 bg-[#72B261] rounded-full"
          >
            Part Time
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.map((pd) => (
            <JobCategoryCard key={pd._id} pd={pd}></JobCategoryCard>
          ))}
        </div>
      </div>
      {/* Feature Company  */}
      <div className="mb-16">
        <FeaturedCompany></FeaturedCompany>
      </div>
      {/* Testimonial  */}
      <div className="mb-16">
        <h1 className="text-lg text-[#72B261] text-center mb-2">TESTIMONIAL</h1>
        <h1 className="text-center text-3xl font-medium mb-2">
          What they say about us
        </h1>

        <div className="mt-4">
          <NewsLetter></NewsLetter>
        </div>
      </div>
    </div>
  );
};

export default Home;
