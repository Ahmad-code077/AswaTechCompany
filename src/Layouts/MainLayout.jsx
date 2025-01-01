import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/componentsExport';

const MainLayout = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <h1>Footer here</h1>
    </div>
  );
};
export default MainLayout;
