import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const user_name = form.userName.value;
    const user_email = form.userEmail.value;
    const company_logo = form.companyLogo.value;
    const job_title = form.jobTitle.value;
    const job_category = form.jobCategory.value;
    const salary_range = form.salaryRange.value;
    const job_description = form.jobDescription.value;
    const posting_date = form.postingDate.value;
    const application_deadline = form.applcationDeadline.value;
    const applicants_number = form.applicantsNumber.value;
    const job_banner = form.jobBannerUrl.value;
    const newJob = {
      user_name,
      user_email,
      company_logo,
      job_title,
      job_category,
      salary_range,
      job_description,
      posting_date,
      application_deadline,
      applicants_number,
      job_banner,
    };
    console.log(newJob);
    fetch("https://jobbe-server.vercel.app/jobCategories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
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
    <div>
      <Helmet>
        <title>Jobbe | Add Job</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-24 mt-8">
        <h1 className="lg:text-3xl text-xl font-bold text-center my-4">
          Add a <span className="text-[#72B261]">Job</span>
        </h1>
        <form onSubmit={handleAddJob}>
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
                  name="applcationDeadline"
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
                  placeholder="Applicants Number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Photo Url */}
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL Of Job Banner</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  placeholder="Photo URL Of Job Banner"
                  name="jobBannerUrl"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Job"
            className="btn btn-block text-white bg-[#72B261]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
