import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
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
  const isSameUser = user_email === user.email;

  const handleApllyJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.displayName.value;
    const email = form.email.value;
    const resume = form.resumeLink.value;
    console.log(name, email, resume);
  };

  return (
    <div className="my-10">
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
              <Link>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <form onSubmit={handleApllyJob} className="lg:w-1/2 md:w-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                name="displayName"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume Link</span>
              </label>
              <input
                type="url"
                placeholder="Resume Link"
                name="resumeLink"
                className="input input-bordered"
                accept=".pdf"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white btn-outline bg-[#2e6ed5]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
