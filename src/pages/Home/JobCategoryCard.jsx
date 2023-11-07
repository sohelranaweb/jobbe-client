import { Link } from "react-router-dom";

const JobCategoryCard = ({ pd }) => {
  const {
    applicants_number,
    application_deadline,
    job_title,
    posted_by,
    posting_date,
    salary_range,
  } = pd;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{posted_by}</h2>
          <h2 className="card-title">{job_title}</h2>
          <p>{posting_date}</p>
          <p>{application_deadline}</p>
          <p>{salary_range}</p>
          <p>{applicants_number}</p>
          <div className="card-actions justify-end">
            <Link to="/jobDetails">
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;
