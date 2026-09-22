import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Layout from "../layout/Layout";
import Skilss from "../pages/skilss/Skilss";
import Experiences from "../pages/experiences/Experiences";
import Certifications from "../pages/certifications/Certifications";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skilss />,
      },
      {
        path: "certifications",
        element: <Certifications />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
