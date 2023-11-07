import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#72B261]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#72B261]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appliedJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#72B261]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#72B261]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Add a Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myJob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#72B261]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          My Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#72B261]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="  normal-case text-xl">
          <img src="https://i.ibb.co/2FhzSNX/ass-cat-003.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2">
          {user ? (
            <div className="flex justify-center items-center">
              <h1>{user.displayName}</h1>
              <img
                className="w-[40px] rounded-full ml-2"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            ""
          )}{" "}
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn text-white btn-outline bg-[#2e6ed5]"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn text-white btn-outline bg-[#2e6ed5]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
