import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const loaddedJob = useLoaderData();
  const {
    user_email,
    company_logo,
    job_title,
    job_banner,
    job_description,
    salary_range,
    applicants_number,
    posting_date,
    application_deadline,
  } = loaddedJob;
  console.log(loaddedJob);
  console.log("user Email", user_email, "user Auth", user.email);
  const { id } = useParams();
  const isSameUser = user_email === user.email;
  return (
    <div className="my-10">
      <h1>this is job Details page: {id}</h1>
      <div className="card lg:card-side glass p-4">
        <figure>
          <img className="" src={job_banner} alt="car!" />
        </figure>

        <div className="card-body space-y-3">
          <h2 className="card-title">{job_title}</h2>
          <p>{job_description}</p>
          <div className="flex items-center">
            <h1 className="mr-4">Company:</h1>
            <img
              className="w-[100px] rounded-full border"
              src={company_logo}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>Salary: {salary_range}</p>
              <p>Applicants Number: {applicants_number}</p>
            </div>
            <div>
              <p>Posting Date: {posting_date}</p>
              <p>Application Deadline: {application_deadline}</p>
            </div>
            {isSameUser ? (
              <button className="btn btn-primary" disabled>
                Apply
              </button>
            ) : (
              <button className="btn btn-primary">Apply</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
