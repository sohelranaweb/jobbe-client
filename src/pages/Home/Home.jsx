import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useState } from "react";
import JobCategoryCard from "./JobCategoryCard";

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
    <div>
      <div className="my-16">
        <Banner></Banner>
      </div>
      <h1>This is home component</h1>
      {/* tab  */}
      <div className="bg-slate-500 w-2/4 h-16 my-16 mx-auto flex justify-between items-center p-4">
        <div
          onClick={() => activeTab(1)}
          style={{ borderBottom: tab === 1 ? "5px solid yellow" : "" }}
          className="border px-4 py-2 bg-white"
        >
          On Site Job
        </div>

        <div
          onClick={() => activeTab(2)}
          style={{ borderBottom: tab === 2 ? "5px solid yellow" : "" }}
          className="border px-4 py-2 bg-white"
        >
          Remote Job
        </div>
        <div
          onClick={() => activeTab(3)}
          style={{ borderBottom: tab === 3 ? "5px solid yellow" : "" }}
          className="border px-4 py-2 bg-white"
        >
          Hybrid
        </div>
        <div
          onClick={() => activeTab(4)}
          style={{ borderBottom: tab === 4 ? "5px solid yellow" : "" }}
          className="border px-4 py-2 bg-white"
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
  );
};

export default Home;
