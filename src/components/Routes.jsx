
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";



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
];
            
           

export default routes;