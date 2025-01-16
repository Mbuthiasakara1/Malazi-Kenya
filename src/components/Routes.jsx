
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import ProjectGallery from "./ProjectGallery";
import ImageDetail from "./ImageDetail";


const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:projectId",
    element: <ProjectGallery />,
  },
  {
    path: "/portfolio/:projectId/image/:imageIndex",
    element: <ImageDetail />,
  },
];
            
           

export default routes;