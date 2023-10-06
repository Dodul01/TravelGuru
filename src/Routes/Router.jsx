import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/destination',
        element: <Destination></Destination>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }, 
      {
        path: '/contact',
        element: <Contact></Contact>
      }, 
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

export default router;