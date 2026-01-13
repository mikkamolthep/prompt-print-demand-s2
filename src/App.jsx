import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Login from "./views/Login"
import Signup from "./views/Signup";
import AuthLayout from "./components/AuthLayout"
import ForgetPassword from "./views/ForgetPassword";
import ResetPassword from "./views/ResetPassword";
import Membership from "./views/Membership";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex flex-col justify-center items-center bg-red-300">
        <h1 className="font-bold">404 - Page Not Found 😭😭</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "membership", element: <Membership /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgetpassword", element: <ForgetPassword /> },
      { path: "resetpassword", element: <ResetPassword /> },
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
