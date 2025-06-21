// App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import ProfileForm from "./ProfileForm";
import MainLayout from "./MainLayout";

import Message from "./Message";
import Post from "./Post";
import Connection from "./Connection";
import Notification from "./Notification";

import Setting from "./setting";
import Homepage from "./Home";

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
        path: "/app/Home",
        element: <Homepage />,
      },
      {
        path: "/app/profile",
        element: <ProfileForm />,
      },
     
      {
        path: "/app/Message",
        element: <Message />,
      },
      {
        path: "/app/post",
        element: <Post />,
      },
      {
        path: "/app/connection",
        element: <Connection />,
      },
      {
        path: "/app/notifiction",
        element: <Notification />,
      },
    
      {
        path: "/app/setting",
        element: <Setting />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
