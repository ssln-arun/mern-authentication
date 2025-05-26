import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-2">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;