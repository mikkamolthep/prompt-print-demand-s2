import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./views/About";
import Home from "./views/Home";
import Login from "./views/Login"
import Signup from "./views/Signup";
import Men from "./views/Men";
import Women from "./views/Women";
import Children from "./views/Children";
import Brands from "./views/Brands";
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
      { path: "about", element: <About /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      { path: "children", element: <Children /> },
      { path: "brands", element: <Brands /> },
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
