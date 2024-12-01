import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/addUsers",
        element: <AddUser />,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
