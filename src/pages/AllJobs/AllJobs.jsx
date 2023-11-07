import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const loaddedJobs = useLoaderData();
  return (
    <div>
      <h1>This is all jobs page : {loaddedJobs.length}</h1>
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
            {loaddedJobs.map((job) => (
              <tr key={job._id}>
                <td>{job.user_name}</td>
                <td>{job.job_title}</td>
                <td>{job.posting_date}</td>
                <td>{job.application_deadline}</td>
                <td>{job.salary_range}</td>
                <td>
                  <Link to={`/job/${job._id}`}>
                    <button className="btn">View Details</button>
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
