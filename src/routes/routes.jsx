import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../components/ErrorPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyformPage from "../pages/MyformPage";
import DeparturePage from "../pages/DeparturePage";
import PaymentPage from "../pages/PaymentPage";
import PaymentSuccess from "../pages/PaymentSuccess";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/About",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/Contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/Login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/Signup",
        element: <SignupPage></SignupPage>,
      },
      {
        path: "/Myform",
        element: (
          <PrivateRoute>
            <MyformPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/Table",
        element: (
          <PrivateRoute>
            <DeparturePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/Payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/Payment-Success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
