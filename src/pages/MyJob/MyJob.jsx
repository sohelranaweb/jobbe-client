import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://jobbe-server.vercel.app/jobCategories")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const specificUserData = jobs.filter((job) => job.user_email === email);

  const handleDeleteJob = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jobbe-server.vercel.app/jobCategories/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Jobbe | My Job</title>
      </Helmet>

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
                  <Link onClick={() => handleDeleteJob(job._id)}>
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
