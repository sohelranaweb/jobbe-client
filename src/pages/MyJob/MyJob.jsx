import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const loadedJobs = useLoaderData();
  // console.log(loadedJobs);
  const specificUserData = loadedJobs.filter((job) => job.user_email === email);
  // console.log(specificUserData);
  return (
    <div>
      <h1>This is my job page</h1>
      <div className="overflow-x-auto my-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Posted By</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th>Update</th>
              <th>Delete</th>
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
                <td>
                  <Link to={`/updateJob/${job._id}`}>
                    <button className="btn">Update</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/job/${job._id}`}>
                    <button className="btn">Delete</button>
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

export default MyJob;
