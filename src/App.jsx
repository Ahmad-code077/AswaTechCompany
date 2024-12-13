import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
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
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home /> {/* Lazy-loaded Home */}
            </Suspense>
          ),
        },
        {
          path: '/about',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About /> {/* Lazy-loaded About */}
            </Suspense>
          ),
        },
        {
          path: '/blogs',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Blogs /> {/* Lazy-loaded Blogs */}
            </Suspense>
          ),
        },
        {
          path: '/contact',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact /> {/* Lazy-loaded Contact */}
            </Suspense>
          ),
        },
        {
          path: '/projects',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Projects /> {/* Lazy-loaded Projects */}
            </Suspense>
          ),
        },
        {
          path: '/services',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Services /> {/* Lazy-loaded Services */}
            </Suspense>
          ),
        },
        {
          path: '/team',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Team /> {/* Lazy-loaded Team */}
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
