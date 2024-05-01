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
        element: <MyformPage></MyformPage>,
      },
      {
        path: "/Table",
        element: <DeparturePage></DeparturePage>,
      },
      {
        path: "/Payment",
        element: <PaymentPage></PaymentPage>,
      },
      {
        path: "/Payment-Success",
        element: <PaymentSuccess />,
      },
    ],
  },
]);

export default router;
