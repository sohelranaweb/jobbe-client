import { Link } from "react-router-dom";

const JobCategoryCard = ({ job }) => {
  const {
    _id,
    user_name,
    company_logo,
    job_title,
    job_banner,
    job_category,
    job_description,
    salary_range,
    applicants_number,
    posting_date,
    application_deadline,
  } = job;

  return (
    <div>
      <div className="card h-[100%] glass p-4">
        <figure className="h-[300px]">
          <img className="h-full" src={job_banner} alt="car!" />
        </figure>

        <div className="card-body space-y-3">
          <p>Posted By: {user_name}</p>
          <h2 className="card-title">{job_title}</h2>
          <p>{job_description}</p>
          <div className="md:flex md:justify-between md:items-center">
            <div className="flex  items-center">
              <h1 className="mr-4">Company:</h1>
              <img
                className="w-[70px] rounded-full border"
                src={company_logo}
                alt=""
              />
            </div>
            <h1 className="mr-4">Job Category: {job_category}</h1>
          </div>

          <div className="md:flex md:justify-between md:items-center">
            <div>
              <p>Salary: {salary_range}</p>
              <p>Applicants Number: {applicants_number}</p>
            </div>
            <div>
              <p>Posting Date: {posting_date}</p>
              <p>Application Deadline: {application_deadline}</p>
            </div>
          </div>
          <Link to={`/job/${_id}`}>
            <button className="btn bg-[#72B261] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;
