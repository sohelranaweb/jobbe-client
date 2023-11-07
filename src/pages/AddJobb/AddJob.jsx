import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24 mt-8">
        <h1 className="lg:text-3xl text-xl font-bold text-center my-4">
          Add a <span className="text-[#2e6ed5]">Job</span>
        </h1>
        <form>
          {/* form row product name and brand name */}
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
          {/* form row type of product name and price */}
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
                  type="number"
                  name="salaryRange"
                  placeholder="Salary Range"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row short description and rating */}
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
          {/* form row short description and rating */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Application Deadline"
                  name="deadline"
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
            className="btn btn-block text-white bg-[#2e6ed5]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
