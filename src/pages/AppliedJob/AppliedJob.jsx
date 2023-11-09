import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AppliedJob = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const loadedJobs = useLoaderData();
  const specificUserData = loadedJobs.filter((job) => job.user_email === email);
  return (
    <div>
      <h1>This is Applied job page: </h1>
      <div className="overflow-x-auto my-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Posted By</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
            </tr>
          </thead>
          <tbody>
            {specificUserData.map((job) => (
              <tr key={job._id}>
                <td>{job.user_name}</td>
                <td>{job.job_title}</td>
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
