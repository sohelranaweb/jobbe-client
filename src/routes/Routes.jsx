import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddJob from "../pages/AddJobb/AddJob";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MyJob from "../pages/MyJob/MyJob";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import UpdateJob from "../pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/jobCategories"),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "myJob",
        element: (
          <PrivateRoute>
            <MyJob></MyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "alljobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("http://localhost:5000/jobCategories"),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateJob/${params.id}`),
      },
    ],
  },
]);

export default router;
