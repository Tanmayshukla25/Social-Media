// App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import ProfileForm from "./ProfileForm";
import MainLayout from "./MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <MainLayout />, 
    children: [
      {
        path: "profile", 
        element: <ProfileForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
