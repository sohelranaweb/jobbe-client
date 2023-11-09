import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const loaddedJobs = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
  const [filteredJobTitle, setFilteredJobTitle] = useState(loaddedJobs);

  const handleSearchButtonClick = () => {
    const newFilteredJob = loaddedJobs.filter((jobTitle) => {
      return jobTitle.job_title
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    });
    setFilteredJobTitle(newFilteredJob);
    setSearchItem("");
  };
  return (
    <div>
      <div
        className="hero h-[50vh] my-8"
        style={{
          backgroundImage: "url(https://i.ibb.co/n08ZZrn/search.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF3]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">
              Seeking Job List By Job Title
            </h1>
            <div className="form-control">
              <div className="input-group flex justify-center">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered text-black"
                  value={searchItem}
                  onChange={(event) => setSearchItem(event.target.value)}
                />
                <button
                  className="btn bg-[#FF444A] text-white"
                  onClick={handleSearchButtonClick}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Posted By</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobTitle.map((job) => (
              <tr key={job._id}>
                <td>{job.user_name}</td>
                <td>{job.job_title}</td>
                <td>{job.posting_date}</td>
                <td>{job.application_deadline}</td>
                <td>{job.salary_range}</td>
                <td>
                  <Link to={`/job/${job._id}`}>
                    <button className="btn bg-[#72B261] text-white">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
