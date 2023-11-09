import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const AppliedJob = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const loadedJobs = useLoaderData();
  const specificUserData = loadedJobs.filter((job) => job.user_email === email);
  const [searchItem, setSearchItem] = useState("");
  const [filteredJobCategory, setFilteredJobCategory] =
    useState(specificUserData);

  const handleSearchButtonClick = () => {
    const newFilteredJob = specificUserData.filter((jobCategory) => {
      return jobCategory.job_category
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    });
    setFilteredJobCategory(newFilteredJob);
    setSearchItem("");
  };
  return (
    <div>
      <Helmet>
        <title>Jobbe | Applied Job</title>
      </Helmet>
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
              Seeking Job List By Job Category
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
                  className="btn bg-[#72B261] text-white"
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
              <th>Applicant Name</th>
              <th>Job Title</th>
              <th>Job Category</th>
              <th>Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobCategory.map((job) => (
              <tr key={job._id}>
                <td>{job.applicant_name}</td>
                <td>{job.job_title}</td>
                <td>{job.job_category}</td>
                <td>{job.posting_date}</td>
                <td>{job.application_deadline}</td>
                <td>{job.salary_range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJob;
