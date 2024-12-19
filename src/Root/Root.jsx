import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './../components/Footer';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
