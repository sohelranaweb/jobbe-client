import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const loaddedJob = useLoaderData();
  const {
    user_name,
    user_email,
    company_logo,
    job_title,
    job_banner,
    job_category,
    job_description,
    salary_range,
    applicants_number,
    posting_date,
    application_deadline,
  } = loaddedJob;
  console.log(loaddedJob);
  const isSameUser = user_email === user.email;

  const handleAppliedJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const applicant_name = form.userName.value;
    const user_email = form.userEmail.value;
    const resume = form.resumeLink.value;
    const company_logo = form.companyLogo.value;
    const job_title = form.jobTitle.value;
    const job_banner = form.jobBanner.value;
    const job_category = form.jobCategory.value;
    const job_description = form.jobDescription.value;
    const salary_range = form.salaryRange.value;
    const applicants_number = form.applicantsNumber.value;
    const posting_date = form.postingDate.value;
    const application_deadline = form.applicationDeadline.value;
    console.log(
      applicant_name,
      user_email,
      resume,
      company_logo,
      job_banner,
      job_category,
      job_title,
      job_description,
      salary_range,
      applicants_number,
      posting_date,
      application_deadline
    );
    const newAppliedJob = {
      applicant_name,
      user_email,
      resume,
      company_logo,
      job_banner,
      job_category,
      job_title,
      job_description,
      salary_range,
      applicants_number,
      posting_date,
      application_deadline,
    };
    fetch("https://jobbe-server.vercel.app/appliedJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAppliedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="my-10">
      <div className="card lg:card-side glass p-4">
        <figure className="w-[1200px]">
          <img className="" src={job_banner} alt="car!" />
        </figure>

        <div className="card-body space-y-3">
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
            <h1>Posted By: {user_name}</h1>
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
          <form onSubmit={handleAppliedJob}>
            {/* form row logged user name and email */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Logged In User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="User name"
                    defaultValue={user?.displayName}
                    name="userName"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="userEmail"
                    defaultValue={user?.email}
                    placeholder="User Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form row company logo and job title */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Company Logo</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    placeholder="Company Logo"
                    defaultValue={company_logo}
                    name="companyLogo"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="jobTitle"
                    defaultValue={job_title}
                    placeholder="Job Title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form row job category and salary range */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Job Category</span>
                </label>
                <label className="input-group">
                  <input
                    type=""
                    placeholder="Job Category"
                    defaultValue={job_category}
                    name="jobCategory"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Salary Range</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="salaryRange"
                    defaultValue={salary_range}
                    placeholder="Salary Range"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form row job description and job posting date */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Job Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Job Description"
                    defaultValue={job_description}
                    name="jobDescription"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Job Posting Date</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="postingDate"
                    defaultValue={posting_date}
                    placeholder="Posting Date"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form row application deadline and applicants number */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Application Deadline</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    placeholder="Application Deadline"
                    defaultValue={application_deadline}
                    name="applicationDeadline"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Applicants Number</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="applicantsNumber"
                    defaultValue={applicants_number}
                    placeholder="Applicants Number"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form row Photo Url */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Photo URL Of Job Banner</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    placeholder="Photo URL Of Job Banner"
                    defaultValue={job_banner}
                    name="jobBanner"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Resume Link</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    placeholder="Resume Link"
                    name="resumeLink"
                    className="input input-bordered w-full"
                    accept=".pdf"
                    required
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-block text-white bg-[#2e6ed5]"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
