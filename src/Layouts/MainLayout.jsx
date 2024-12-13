import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h1>Header Here</h1>
      <Outlet />
      <h1>Footer here</h1>
    </div>
  );
};
export default MainLayout;
