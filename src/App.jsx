import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Blogs,
  Contact,
  Home,
  Projects,
  Services,
  Team,
} from './pages/pagesExport';
import MainLayout from './Layouts/MainLayout';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />, // Main layout for all routes
      children: [
        {
          path: '/',
          element: <Home />, // Route for the home page
        },
        {
          path: '/about',
          element: <About />, // Route for the about page
        },
        {
          path: '/blogs',
          element: <Blogs />, // Route for the blogs page
        },
        {
          path: '/contact',
          element: <Contact />, // Route for the contact page
        },
        {
          path: '/projects',
          element: <Projects />, // Route for the projects page
        },
        {
          path: '/services',
          element: <Services />, // Route for the services page
        },
        {
          path: '/team',
          element: <Team />, // Route for the team page
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
