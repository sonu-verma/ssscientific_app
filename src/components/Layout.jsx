import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        <ScrollToTop />
        <Navbar />
        <Outlet /> {/* Renders nested route components */}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
